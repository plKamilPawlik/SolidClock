import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "./app.css";
import { datetime$ } from "./providers/datetime";
import { createTimer } from "./providers/hooks/create-timer";

export default function () {
	// component logic
	createTimer(() => datetime$.update());

	// component layout
	return (
		<Router root={(props) => <Suspense>{props.children}</Suspense>}>
			<FileRoutes />
		</Router>
	);
}
