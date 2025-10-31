import { createMemo } from "solid-js";
import { datetime$ } from "~/providers/datetime";
import { stopwatch$ } from "~/providers/stopwatch";

const MINUTE = 1000 * 60;
const SECOND = 1000;

export function StopwatchDisplay() {
	// component logic
	const elapsed = createMemo(() => {
		if (stopwatch$.get.status.isPaused) return stopwatch$.get.deltaTimeMS;
		if (stopwatch$.get.status.isRuning)
			return (
				datetime$.get.date.getTime() -
				stopwatch$.get.startTimeMS +
				stopwatch$.get.deltaTimeMS
			);

		return 0;
	});

	const seconds = createMemo(() => Math.floor(elapsed() / SECOND) % 60);
	const minutes = createMemo(() => Math.floor(elapsed() / MINUTE) % 60);

	// component layout
	return (
		<div class="grid place-items-center">
			<div class="relative grid h-64 w-64">
				<div class="rounded-full bg-base-content drop-shadow-xl" />
				<AnimatePing animate={stopwatch$.get.status.isRuning} />
				<DisplayTime minutes={minutes()} seconds={seconds()} />
			</div>
		</div>
	);
}

function DisplayTime(props: { minutes: number; seconds: number }) {
	// component logic

	// component layout
	return (
		<div class="-translate-1/2 absolute top-1/2 left-1/2">
			<p class="text-center text-base-100">
				<time class="font-semibold text-6xl tabular-nums">
					{String(props.minutes).padStart(2, "0")}:
					{String(props.seconds).padStart(2, "0")}
				</time>
			</p>
		</div>
	);
}

function AnimatePing(props: { animate: boolean }) {
	// component logic

	// component layout
	return (
		<div class="absolute grid h-full w-full">
			<div
				class="-z-10 scale-[0.55] rounded-full bg-base-content"
				classList={{ "animate-ping": props.animate }}
			/>
		</div>
	);
}
