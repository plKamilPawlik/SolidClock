import { createStore } from "solid-js/store";
import { forecastWeather } from "./api/openmeteo";

export const [get, set] = createStore<{
	forecast?: OpenMeteoForecast;
}>({});

export const weather$ = {
	get,
	obtain(geocode: GeolocationCoordinates): Promise<void> {
		return forecastWeather(geocode).then((forecast) => set("forecast", forecast));
	},
} as const;
