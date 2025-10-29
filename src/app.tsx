import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "./app.css";
import { useDatetime } from "./providers/datetime";
import { useGeocoding } from "./providers/geocoding";
import { useGeolocation } from "./providers/geolocation";

export default function () {
	// component logic
	useDatetime();
	useGeocoding();
	useGeolocation();

	// component layout
	return (
		<Router root={(props) => <Suspense>{props.children}</Suspense>}>
			<FileRoutes />
		</Router>
	);
}
