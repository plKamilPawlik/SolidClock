import type { ParentProps } from "solid-js";
import { datetime$ } from "~/providers/datetime";

export function ClockAnalog() {
	// component logic

	const hours12 = () => datetime$.get.date.getHours() % 12;
	const minutes = () => datetime$.get.date.getMinutes();
	const seconds = () => datetime$.get.date.getSeconds();

	// component layout
	return (
		<div class="grid place-items-center">
			<div class="relative grid h-64 w-64">
				<div class="rounded-full bg-base-content drop-shadow-xl" />
				<ClockHand rotate={() => hours12() * 30 + minutes() * 0.5}>
					<div class="h-20 rounded bg-base-100 p-1" />
				</ClockHand>
				<ClockHand rotate={() => minutes() * 6}>
					<div class="h-28 rounded bg-base-100 p-1" />
				</ClockHand>
				<ClockHand rotate={() => seconds() * 6}>
					<div class="h-24 rounded bg-base-100 p-px" />
				</ClockHand>
				<ClockCenter />
			</div>
		</div>
	);
}

function ClockHand(props: ParentProps & { rotate(): number }) {
	// component logic

	// component layout
	return (
		<div class="absolute top-1/2 left-1/2" style={{ rotate: `${props.rotate()}deg` }}>
			<div class="-translate-x-1/2 absolute bottom-0">{props.children}</div>
		</div>
	);
}

function ClockCenter() {
	// component logic

	// component layout
	return (
		<div class="absolute top-1/2 left-1/2">
			<div class="-translate-1/2 absolute rounded-full bg-base-100 p-1.5" />
		</div>
	);
}
