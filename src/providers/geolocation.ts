import { createStore } from "solid-js/store";

export const [get, set] = createStore<{
	coords?: GeolocationCoordinates;
}>();

export const geolocation$ = {
	get,
	async refresh(): Promise<void> {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(({ coords }) => {
				set({ coords });
				resolve();
			}, reject);
		});
	},
} as const;

export function useGeolocation() {
	return geolocation$;
}
