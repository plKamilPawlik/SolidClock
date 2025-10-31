import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createEffect, Suspense } from "solid-js";

import "./app.css";
import { datetime$ } from "./providers/datetime";
import { geolocation$ } from "./providers/geolocation";
import { createTimer } from "./providers/hooks/create-timer";
import { weather$ } from "./providers/weather";

export default function () {
	// component logic
	createTimer(() => datetime$.update());

	// auto update geolocation
	createEffect(() => {
		if (geolocation$.get.coords) {
			geolocation$.decode(geolocation$.get.coords);
			weather$.obtain(geolocation$.get.coords);
		}
	});

	// auto update weather
	createEffect(() => {
		if (weather$.get.forecast) {
			weather$.decode(weather$.get.forecast);
		}
	});

	// component layout
	return (
		<Router root={(props) => <Suspense>{props.children}</Suspense>}>
			<FileRoutes />
		</Router>
	);
}
