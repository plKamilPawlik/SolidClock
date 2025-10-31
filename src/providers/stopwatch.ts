import { createStore, produce } from "solid-js/store";

export const [get, set] = createStore<{
	deltaTimeMS: number;
	startTimeMS: number;
	status: {
		isPaused: boolean;
		isRuning: boolean;
	};
}>({
	deltaTimeMS: 0,
	startTimeMS: 0,
	status: {
		isPaused: false,
		isRuning: false,
	},
});

export const stopwatch$ = {
	get,
	pause(): void {
		set(
			produce((state) => {
				state.deltaTimeMS += Date.now() - state.startTimeMS;
				state.startTimeMS = 0;
				state.status.isPaused = true;
				state.status.isRuning = false;
			}),
		);
	},
	resume(): void {
		set(
			produce((state) => {
				state.startTimeMS = Date.now();
				state.status.isPaused = false;
				state.status.isRuning = true;
			}),
		);
	},
	start(): void {
		set(
			produce((state) => {
				state.deltaTimeMS = 0;
				state.startTimeMS = Date.now();
				state.status.isPaused = false;
				state.status.isRuning = true;
			}),
		);
	},
	stop(): void {
		set(
			produce((state) => {
				state.deltaTimeMS = 0;
				state.startTimeMS = 0;
				state.status.isPaused = false;
				state.status.isRuning = false;
			}),
		);
	},
} as const;
