import { useState } from "react";

export const useWeatherData = (city) => {
  const [data, setData] = useState(null);
  const [isCityExact, setIsCityExact] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (city) => {
    try {
      setData(null);
      if (city) {
        setIsLoading(true);
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/forecast/daily?&city=${city}&key=${process.env.REACT_APP_WEATHER_FORECAST_API_KEY}`
        );

        const responseData = await res.json();
        if (city?.toLowerCase() === responseData?.city_name?.toLowerCase()) {
          setIsCityExact(true);
          setData(responseData);
        } else {
          setIsCityExact(false);
        }
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isCityExact, fetchData, isLoading };
};
