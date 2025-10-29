import { onCleanup, onMount } from "solid-js";

type TimerCallback = () => void;
type TimerDispose = () => void;

export function createTimer(callback: TimerCallback) {
	let autoDispose: TimerDispose;

	onMount(() => {
		let tickID: number;

		const tick = () => {
			tickID = requestAnimationFrame(call);
		};

		const call = () => {
			callback();
			tick();
		};

		autoDispose = () => cancelAnimationFrame(tickID);

		return tick();
	});

	onCleanup(() => {
		if (autoDispose) autoDispose();
	});
}
