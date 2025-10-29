import { onCleanup, onMount } from "solid-js";
import { createStore } from "solid-js/store";

export const [get, set] = createStore<{
	date: Date;
}>({
	date: new Date(),
});

export const datetime$ = {
	get,
} as const;

export function useDatetime() {
	let disposeTimer: () => void;

	onMount(() => {
		disposeTimer = (() => {
			let tickID: number;

			const tick = (): void => {
				tickID = requestAnimationFrame(call);
			};

			const call = (): void => {
				set({ date: new Date() });
				tick();
			};

			tick();

			return () => cancelAnimationFrame(tickID);
		})();
	});

	onCleanup(() => {
		if (disposeTimer) disposeTimer();
	});

	return datetime$;
}
