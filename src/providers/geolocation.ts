import { createStore } from "solid-js/store";
import { reverseGeocode } from "./api/bigdatacloud";
import { getCurrentPosition } from "./api/geolocation";

export const [get, set] = createStore<{
	coords?: GeolocationCoordinates;
	geocode?: BigDataCloudGeocode;
}>({});

export const geolocation$ = {
	get,
	async obtain(): Promise<void> {
		return getCurrentPosition().then((coords) => set("coords", coords));
	},
	async decode(coords: GeolocationCoordinates): Promise<void> {
		return reverseGeocode(coords).then((geocode) => set("geocode", geocode));
	},
} as const;
