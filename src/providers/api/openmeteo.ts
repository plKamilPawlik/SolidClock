export async function forecastWeather({
	latitude,
	longitude,
}: GeolocationCoordinates): Promise<OpenMeteoForecast> {
	const currentWeatherOptions = String(["temperature_2m", "weather_code", "is_day"]);

	const url = new URL("https://api.open-meteo.com/v1/forecast");
	url.searchParams.append("latitude", latitude.toString());
	url.searchParams.append("longitude", longitude.toString());
	url.searchParams.append("current", currentWeatherOptions);

	try {
		return fetch(url).then((response) => response.json());
	} catch {
		return Promise.reject();
	}
}
