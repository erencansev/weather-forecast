import React, { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Header } from "./components/Header/Header";
import { NotFound } from "./components/NotFound/NotFound";
import { DetailCard } from "./components/Detail/DetailCard";
import { useWeatherData } from "./hooks/useWeather";

import "./App.css";

import { Table } from "./components/Table/Table";
import { useDebounce } from "./hooks/useDebounce";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";

export const App = () => {
  const [city, setCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(city, 500);
  const { data, isCityExact, fetchData, isLoading } =
    useWeatherData(debouncedValue);
  const [selectedDate, setSelectedDate] = useState();

  useEffect(() => {
    fetchData(city);
    setSelectedDate(null);
  }, [city]);

  return (
    <div className="App">
      <Header />
      <SearchBar
        city={city}
        setCity={setCity}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="forecast-section">
        {isLoading ? (
          <LoadingSpinner />
        ) : data ? (
          <>
            <Table
              city={debouncedValue}
              isCityExact={isCityExact}
              data={data}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <DetailCard
              className="detail-card"
              data={data}
              selectedDate={selectedDate || data?.data?.[0]}
            />
          </>
        ) : (
          <NotFound city={searchTerm} />
        )}
      </div>
    </div>
  );
};

export default App;
