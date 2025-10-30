import type { ParentProps } from "solid-js";
import { MobileChin } from "~/components/mobile-chin";
import { MobileDock } from "~/components/mobile-dock";

export default function (props: ParentProps) {
	// component logic

	// component layout
	return (
		<div id="app" class="grid min-h-dvh">
			<div class="grid grid-rows-1">
				{props.children}
				<MobileChin />
				<MobileDock />
			</div>
		</div>
	);
}
