import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [forecastData, setForecastData] = useState(null);

  const apiKey = "d729d96edb9e556d76e2882528624d82";

  useEffect(() => {
    fetchWeather();
    fetchForecast();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchForecast = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      setForecastData(response.data);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
    fetchForecast();
  };
  // console.log(weatherData)

  return (
    <>
      <div className="flex flex-col  h-screen">
        <div class="flex  p-20 rounded gap-4 justify-evenly h-fit">
          <div class="relative">
            <div class=" absolute mt-3 inset-y-100 start-3 flex items-center">
              <svg
                width="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
            <form
              className=" flex gap-4  h-fit w-gap-4 justify-between"
              onSubmit={handleSubmit}
            >
              <input
                className="search-input p-3 ps-12 w-[550px] border border-black-500 rounded-xl focus:border-gray-600 focus:ring-1 focus:outline-none focus:ring-gray-600"
                type="text"
                value={city}
                onChange={handleChange}
                placeholder="Enter city name"
              />
              <button
                className="rounded-xl bg-white opacity-60  border-2 border-black "
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <div className="pb-10">
              {weatherData && (
                <h2 className="font-semibold text-xl">
                  Current Weather in{" "}
                  <span className=" underline">{weatherData.name}</span>{" "}
                </h2>
              )}
            </div>
            {weatherData && (
              <div className="flex justify-between ">
                <div className="flex gap-4 w-fit card bg-white p-4 rounded-lg opacity-60 border-black border-2">
                  <svg
                    width="70px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM3.66865 3.71609C3.94815 3.41039 4.42255 3.38915 4.72825 3.66865L6.95026 5.70024C7.25596 5.97974 7.2772 6.45413 6.9977 6.75983C6.7182 7.06553 6.2438 7.08677 5.9381 6.80727L3.71609 4.77569C3.41039 4.49619 3.38915 4.02179 3.66865 3.71609ZM20.3314 3.71609C20.6109 4.02179 20.5896 4.49619 20.2839 4.77569L18.0619 6.80727C17.7562 7.08677 17.2818 7.06553 17.0023 6.75983C16.7228 6.45413 16.744 5.97974 17.0497 5.70024L19.2718 3.66865C19.5775 3.38915 20.0518 3.41039 20.3314 3.71609ZM12 7.75C9.65279 7.75 7.75 9.65279 7.75 12C7.75 14.3472 9.65279 16.25 12 16.25C14.3472 16.25 16.25 14.3472 16.25 12C16.25 9.65279 14.3472 7.75 12 7.75ZM6.25 12C6.25 8.82436 8.82436 6.25 12 6.25C15.1756 6.25 17.75 8.82436 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM17.0255 17.0252C17.3184 16.7323 17.7933 16.7323 18.0862 17.0252L20.3082 19.2475C20.6011 19.5404 20.601 20.0153 20.3081 20.3082C20.0152 20.6011 19.5403 20.601 19.2475 20.3081L17.0255 18.0858C16.7326 17.7929 16.7326 17.3181 17.0255 17.0252ZM6.97467 17.0253C7.26756 17.3182 7.26756 17.7931 6.97467 18.086L4.75244 20.3082C4.45955 20.6011 3.98468 20.6011 3.69178 20.3082C3.39889 20.0153 3.39889 19.5404 3.69178 19.2476L5.91401 17.0253C6.2069 16.7324 6.68177 16.7324 6.97467 17.0253ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z"
                        fill="#000000"
                      ></path>{" "}
                    </g>
                  </svg>
                  <div className="flex flex-col p-2 ">
                    <p>{weatherData.main.temp}°C</p>
                    <p>{weatherData.weather[0].description}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-fit card bg-white p-4 rounded-lg opacity-60 border-black border-2">
                  <div className="flex  p-2 gap-6 text-center">
                    <span className="flex flex-col">
                      Temperature{" "}
                      <p className="font-semibold">{weatherData.main.temp}°C</p>
                    </span>
                    <span className="flex flex-col">
                      Description{" "}
                      <p className="font-semibold">
                        {weatherData.weather[0].description}
                      </p>
                    </span>
                    <span className="flex flex-col">
                      Humidité{" "}
                      <p className="font-semibold">
                        {weatherData.main.humidity}%
                      </p>
                    </span>
                    <span className="flex flex-col">
                      vitesse vent{" "}
                      <p className="font-semibold">
                        {weatherData.wind.speed} m/s
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="pt-10 pb-6">
            {forecastData && (
              <h2 className="font-semibold text-xl">Prévisions court terme </h2>
            )}
          </div>

          {forecastData && (
            <div className="grid grid-cols-5 gap-4 ">
            {forecastData.list.slice(0, 5).map((forecastEntry, index) => {
              const forecastDateTime = new Date(forecastEntry.dt_txt);
              const monthAbbreviation = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(forecastDateTime);
              const formattedDateTime = `${monthAbbreviation} ${forecastDateTime.getDate()} - ${forecastDateTime.getHours()}:${('0' + forecastDateTime.getMinutes()).slice(-2)}`;
          
              return (
                <div key={index} className="bg-gray-600 opacity-50 p-4 rounded-lg border-white border-2 ">
                  <div className="flex gap-3">
                  <svg width="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.38846 12.7023C3.98522 12.1237 3 10.7636 3 9.17807C3 7.42863 4.3 5.8125 6.25 5.5C6.86168 4.0617 8.30934 3 9.9978 3C12.1607 3 13.9285 4.65893 14.05 6.75C14.8721 7.10549 15.5169 7.83126 15.8166 8.69914M5.38846 12.7023C4.50928 13.5938 4 14.7867 4 16.0315C4 18.7755 6.28335 21 9.1 21L16.75 21C19.0972 21 21 19.1279 21 16.8185C21 15.1039 19.951 13.5202 18.45 12.875C18.3457 11.0905 17.3135 9.5483 15.8166 8.69914M5.38846 12.7023C6.11557 11.9651 7.0957 11.4339 8.25 11.25C9.04989 9.3802 10.943 8 13.151 8C14.1227 8 15.0333 8.25474 15.8166 8.69914" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  <p className="text-white font-semibold">{formattedDateTime}</p>
                  </div>
                  <p className="text-white text-center">{forecastEntry.main.temp}°C</p>
                  <p className="text-white text-center">{forecastEntry.weather[0].description}</p>
                </div>
              );
            })}
          </div>
          
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
