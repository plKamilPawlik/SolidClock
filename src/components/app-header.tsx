import { A } from "@solidjs/router";
import { MaterialSymbol } from "./material-symbol";

export function AppHeader() {
	// component logic

	// component layout
	return (
		<header class="navbar sticky top-0 bg-base-100">
			<div class="navbar-start" />
			<div class="navbar-center" />
			<div class="navbar-end">
				<A class="btn btn-square btn-ghost" href="/settings">
					<MaterialSymbol name="settings" />
				</A>
			</div>
		</header>
	);
}
