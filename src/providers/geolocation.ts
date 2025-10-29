import { createStore } from "solid-js/store";

export const [get, set] = createStore<{
	coords?: GeolocationCoordinates;
	geocode?: BigDataCloudGeocode;
}>({});

export const geolocation$ = {
	get,
	async decode({ latitude, longitude }: GeolocationCoordinates): Promise<void> {
		const url = new URL("https://api.bigdatacloud.net/data/reverse-geocode-client");
		url.searchParams.append("latitude", latitude.toString());
		url.searchParams.append("longitude", longitude.toString());

		return fetch(url)
			.then((response) => response.json())
			.then((geocode) => set("geocode", geocode));
	},
	async refresh(): Promise<void> {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(({ coords }) => {
				this.decode(coords);
				set("coords", coords);
				resolve();
			}, reject);
		});
	},
} as const;
