import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import { geolocation$ } from "./geolocation";

export const [get, set] = createStore<{
	city?: string;
	countryCode?: string;
	countryName?: string;
}>();

export const geocoding$ = {
	get,
	async refresh({ latitude, longitude }: GeolocationCoordinates): Promise<void> {
		const url = new URL("https://api.bigdatacloud.net/data/reverse-geocode-client");
		url.searchParams.append("latitude", latitude.toString());
		url.searchParams.append("longitude", longitude.toString());

		try {
			const res = await fetch(url).then((res) => res.json());

			if (typeof res?.city !== "string") return Promise.reject();
			if (typeof res?.countryCode !== "string") return Promise.reject();
			if (typeof res?.countryName !== "string") return Promise.reject();

			set({
				city: res?.city,
				countryCode: res?.countryCode,
				countryName: res?.countryName,
			});

			return Promise.resolve();
		} catch {
			return Promise.reject();
		}
	},
} as const;

export function useGeocoding() {
	createEffect(() => {
		const { coords } = geolocation$.get;

		if (coords) geocoding$.refresh(coords);
	});

	return geocoding$;
}
