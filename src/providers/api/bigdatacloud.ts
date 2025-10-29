export async function reverseGeocode({
	latitude,
	longitude,
}: GeolocationCoordinates): Promise<BigDataCloudGeocode> {
	const url = new URL("https://api.bigdatacloud.net/data/reverse-geocode-client");
	url.searchParams.append("latitude", latitude.toString());
	url.searchParams.append("longitude", longitude.toString());

	try {
		return fetch(url).then((response) => response.json());
	} catch {
		return Promise.reject();
	}
}
