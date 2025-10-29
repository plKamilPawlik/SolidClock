import type { ParentProps } from "solid-js";
import { AppFooter } from "~/components/app-footer";
import { AppHeader } from "~/components/app-header";

export default function (props: ParentProps) {
	// component logic

	// component layout
	return (
		<div id="app" class="grid h-dvh overflow-auto">
			<div class="grid grid-rows-[auto_1fr_auto]">
				<AppHeader />
				{props.children}
				<AppFooter />
			</div>
		</div>
	);
}
