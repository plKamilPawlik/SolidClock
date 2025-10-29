import { createStore } from "solid-js/store";
import { reverseGeocode } from "./api/bigdatacloud";

export const [get, set] = createStore<{
	coords?: GeolocationCoordinates;
	geocode?: BigDataCloudGeocode;
}>({});

export const geolocation$ = {
	get,
	decode(coords: GeolocationCoordinates): Promise<void> {
		return reverseGeocode(coords).then((geocode) => set("geocode", geocode));
	},
	refresh(): Promise<void> {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(({ coords }) => {
				set("coords", coords);
				resolve();
			}, reject);
		});
	},
} as const;
