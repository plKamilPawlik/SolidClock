import { MaterialSymbol } from "~/components/material-symbol";
import { geolocation$ } from "~/providers/geolocation";

export function ClockLocation() {
	// component logic

	// component layout
	return (
		<div class="text-center">
			<p class="font-semibold">
				<span class="inline-flex gap-2">
					{geolocation$.get.coords ? (
						<MaterialSymbol name="location_on" />
					) : (
						<MaterialSymbol name="location_off" />
					)}
					{geolocation$.get.geocode ? (
						<DisplayLocation geocode={geolocation$.get.geocode} />
					) : (
						<span>Location unknown</span>
					)}
				</span>
			</p>
			<p class="-mt-2 text-sm">
				{geolocation$.get.coords ? (
					<DisplayCoordinates coords={geolocation$.get.coords} />
				) : (
					<ButtonRefresh refresh={geolocation$.refresh} />
				)}
			</p>
		</div>
	);
}

function ButtonRefresh(props: { refresh(): void }) {
	// component logic

	// component layout
	return (
		<button class="link" type="button" on:click={() => props.refresh()}>
			refresh
		</button>
	);
}

function DisplayCoordinates(props: { coords: GeolocationCoordinates }) {
	// component logic
	const parse = (): string => {
		const { latitude, longitude } = props.coords;

		const NS: "N" | "S" = latitude >= 0 ? "N" : "S";
		const EW: "E" | "W" = longitude >= 0 ? "E" : "W";

		return `${latitude.toFixed(2)}${NS}, ${longitude.toFixed(2)}${EW}`;
	};

	// component layout
	return <span>{parse()}</span>;
}

function DisplayLocation(props: { geocode: BigDataCloudGeocode }) {
	// component logic
	const parse = (): string => {
		const { city, countryCode, countryName } = props.geocode;

		return `${city}, ${countryName.length >= 12 ? countryCode : countryName}`;
	};

	// component layout
	return <span>{parse()}</span>;
}
