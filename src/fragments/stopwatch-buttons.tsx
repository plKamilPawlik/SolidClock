import { MaterialSymbol } from "~/components/material-symbol";
import { stopwatch$ } from "~/providers/stopwatch";

export function StopwatchButtons() {
	// component logic
	const showPauseButton = (): boolean => {
		if (stopwatch$.get.status.isPaused) return false;
		if (stopwatch$.get.status.isRuning) return true;

		return false;
	};

	const showResumeButton = (): boolean => {
		if (stopwatch$.get.status.isPaused) return true;
		if (stopwatch$.get.status.isRuning) return false;

		return false;
	};

	const showStartButton = (): boolean => {
		if (stopwatch$.get.status.isPaused) return false;
		if (stopwatch$.get.status.isRuning) return false;

		return true;
	};

	const showStopButton = (): boolean => {
		if (stopwatch$.get.status.isPaused) return true;
		if (stopwatch$.get.status.isRuning) return true;

		return false;
	};

	// component layout
	return (
		<div class="grid content-end">
			<div class="flex flex-nowrap justify-center gap-4">
				{showPauseButton() && (
					<Button action={stopwatch$.pause} label="Pause" symbol="pause_circle" />
				)}
				{showResumeButton() && (
					<Button action={stopwatch$.resume} label="Resume" symbol="play_circle" />
				)}
				{showStartButton() && (
					<ButtonWide action={stopwatch$.start} label="Start" symbol="play_circle" />
				)}
				{showStopButton() && (
					<Button action={stopwatch$.stop} label="Stop" symbol="stop_circle" />
				)}
			</div>
		</div>
	);
}

function Button(props: { action(): void; label: string; symbol: string }) {
	// component logic

	// component layout
	return (
		<button class="btn btn-soft btn-lg w-32" type="button" on:click={props.action}>
			<MaterialSymbol name={props.symbol} />
			<span>{props.label}</span>
		</button>
	);
}

function ButtonWide(props: { action(): void; label: string; symbol: string }) {
	// component logic

	// component layout
	return (
		<button class="btn btn-soft btn-lg btn-wide" type="button" on:click={props.action}>
			<MaterialSymbol name={props.symbol} />
			<span>{props.label}</span>
		</button>
	);
}
