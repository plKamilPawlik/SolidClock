import { createStore } from "solid-js/store";
import { forecastWeather } from "./api/openmeteo";
import { decodeWeather } from "./api/weathercodes";

export const [get, set] = createStore<{
	forecast?: OpenMeteoForecast;
	summary?: WeatherSummary;
}>({});

export const weather$ = {
	get,
	async decode(forecast: OpenMeteoForecast): Promise<void> {
		return decodeWeather(forecast).then((summary) => set("summary", summary));
	},
	async obtain(geocode: GeolocationCoordinates): Promise<void> {
		return forecastWeather(geocode).then((forecast) => set("forecast", forecast));
	},
} as const;
