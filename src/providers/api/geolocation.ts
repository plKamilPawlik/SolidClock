export async function getCurrentPosition(): Promise<GeolocationCoordinates> {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(({ coords }) => {
			resolve(coords);
		}, reject);
	});
}
