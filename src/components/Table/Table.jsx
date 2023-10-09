import { Line, getElementAtEvent } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { monthNames } from "../../constants";

function TableContent({ data, setSelectedDate, setSelectedIndex }) {
  return (
    <Line
      data={{
        labels: data?.data?.slice(0, 8).map((item) => {
          const date = new Date(item?.valid_date);
          const day = date.getDate();
          const month = date.getMonth();
          return `${day} ${monthNames[month]}`;
        }),
        datasets: [
          {
            label: "Min",
            data: data?.data?.slice(0, 8).map((item) => item?.min_temp),
            backgroundColor: "#6b6b6b",
            borderColor: "#6b6b6b",
            borderWidth: 4,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#fff",
            pointBorderWidth: 0.3,
            pointStyle: "circle",
          },
          {
            label: "Max",
            data: data?.data?.slice(0, 8).map((item) => item?.max_temp),
            backgroundColor: "#8bc0ec",
            borderColor: "#8bc0ec",
            borderWidth: 4,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#fff",
            pointBorderWidth: 0.3,
            pointStyle: "circle",
          },
        ],
      }}
      options={{
        elements: {
          line: {
            tension: 0.4,
          },
        },

        tooltips: {
          enabled: false,
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Temperature",
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: `Avarage High & Low Temperatures for ${data?.city_name}`,
            position: "top",
            font: {
              size: 16,
              weight: "bold",
            },
          },
        },

        onClick: (e, el) => {
          if (el.length > 0) {
            const dataIndex = el[0].index;
            const datasetIndex = el[0].datasetIndex;

            if (datasetIndex === 0) {
              // User clicked the "Min" dataset
              setSelectedDate({
                ...data?.data[dataIndex],
                temp: data?.data[dataIndex]?.min_temp,
              });
            } else if (datasetIndex === 1) {
              // User clicked the "Max" dataset
              setSelectedDate({
                ...data?.data[dataIndex],
                temp: data?.data[dataIndex]?.max_temp,
              });
            }
          }
        },
      }}
    />
  );
}

export function Table({ isCityExact, data, selectedDate, setSelectedDate }) {
  return (
    <div className="dataCard revenueCard">
      {isCityExact ? (
        <TableContent data={data} setSelectedDate={setSelectedDate} />
      ) : null}
    </div>
  );
}
