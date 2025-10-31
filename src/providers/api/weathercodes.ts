import WeatherCodes from "~/resources/weather-codes.json";

export function decodeWeather(forecast: OpenMeteoForecast): Promise<WeatherSummary> {
	const { weather_code } = forecast.current;

	if (isWatherCode(weather_code)) {
		return Promise.resolve(WeatherCodes[weather_code]);
	} else {
		return Promise.reject();
	}
}

export function isWatherCode(code: PropertyKey): code is WeatherCode {
	return code in WeatherCodes;
}
