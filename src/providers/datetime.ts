import { createStore } from "solid-js/store";

export const [get, set] = createStore<{
	date: Date;
}>({
	date: new Date(),
});

export const datetime$ = {
	get,
	update(): void {
		set("date", new Date());
	},
} as const;
