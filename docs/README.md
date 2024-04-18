# Weather App

Welcome to the Weather App repository! This project is a React-based application designed to display weather information for different locations.

## Prerequisites

Before getting started, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/): Make sure to download and install Node.js.
- [Git](https://git-scm.com/): Ensure Git is installed on your machine.

## Cloning the Repository

To clone this repository to your local machine, open a terminal or command prompt and run the following command:
```bash
git clone https://github.com/Douaesb/Weather-.git
```

## Installation
1. Navigate to the project directory:

```bash
cd Weather-
```

2. Install dependencies using npm:
```bash
npm install
```

## Usage
Once the installation is complete, you can start the development server using the following command:
```bash
npm start
```

This will start the application and open it in your default web browser. If it doesn't open automatically, you can access it by navigating to http://localhost:3000 in your browser.

# Weather API Documentation

## WeatherAPI

The WeatherAPI provides access to current weather data, forecasts, and historical weather data for locations worldwide.

### Endpoint

- The base URL for accessing current weather data is typically: `http://api.weatherapi.com/v1/current.json`

### Authentication

- Access to the OpenWeather API requires an API key, which can be obtained by signing up on the [WeatherAPI website](https://www.weatherapi.com/).

### Example Usage

#### Fetching Current Weather Data

To fetch current weather data for a specific location, you can make a GET request to the OpenWeather API endpoint, providing the location's coordinates (latitude and longitude) and your API key.

```bash
curl -X GET \
  'http://api.weatherapi.com/v1/current.json?key={your_api_key}&q={location}' \
  -H 'Content-Type: application/json'
```

Replace {latitude} and {longitude} with the coordinates of the location you're interested in, and {your_api_key} with your actual API key.

### Example Response
The API response will include various weather-related information, such as temperature, humidity, wind speed, and weather conditions.

```json
{
  "location": {
    "name": "London",
    "region": "City of London, Greater London",
    "country": "United Kingdom",
    "lat": 51.52,
    "lon": -0.11,
    "tz_id": "Europe/London",
    "localtime_epoch": 1647592006,
    "localtime": "2022-03-17 12:13"
  },
  "current": {
    "last_updated_epoch": 1647591300,
    "last_updated": "2022-03-17 12:01",
    "temp_c": 10.0,
    "temp_f": 50.0,
    "is_day": 1,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "code": 1003
    },
    "wind_mph": 4.5,
    "wind_kph": 7.2,
    "humidity": 75,
    "cloud": 25,
    "feelslike_c": 8.4,
    "feelslike_f": 47.1,
    "uv": 3.0,
    "visibility_km": 10.0,
    "visibility_miles": 6.0
  }
}

```

This JSON response contains various weather-related parameters, including temperature, humidity, wind speed, and weather description.

### Example Usage in Project
In the Weather project, the OpenWeather API is used to fetch current weather data for the user's location and display it in the application interface. The application may make an API request when the user searches for a location or when the application loads initially.

For more information, head to the [OpenWeather documentation](https://www.weatherapi.com/docs/).