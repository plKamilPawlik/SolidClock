import type { ParentProps } from "solid-js";
import { AppFooter } from "~/components/app-footer";
import { AppHeader } from "~/components/app-header";

export default function (props: ParentProps) {
	// component logic

	// component layout
	return (
		<div id="app" class="grid min-h-dvh">
			<div class="flex flex-col gap-6">
				<AppHeader />
				<main class="grid grow">{props.children}</main>
				<AppFooter />
			</div>
		</div>
	);
}
