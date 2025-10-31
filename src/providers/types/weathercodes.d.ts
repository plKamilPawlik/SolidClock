import WeatherCodes from "~/resources/weather-codes.json";

declare global {
	type WeatherCode = keyof typeof WeatherCodes;
	type WeatherSummary = (typeof WeatherCodes)[0];
}
