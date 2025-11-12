import { createSignal } from "solid-js";
import { MaterialSymbol } from "~/components/material-symbol";

export function AlarmCreate() {
	// component logic
	const [name, setName] = createSignal("New Alarm");
	const [time, setTime] = createSignal("00:00");

	// component layout
	return (
		<div class="grid gap-4 font-semibold">
			<ActionLabel name={name()} update={setName} />
			<TimeInput time={time()} update={setTime} />
		</div>
	);
}

function ActionLabel(props: { name: string; update(value: string): void }) {
	// component logic

	// component layout
	return (
		<div class="flex flex-nowrap items-center gap-2">
			<input
				class="input input-lg input-ghost grow"
				type="text"
				value={props.name}
				on:change={(e) => props.update(e.target.value)}
			/>
			<button class="btn btn-ghost btn-circle" type="button">
				<MaterialSymbol name="add" />
			</button>
		</div>
	);
}

function TimeInput(props: { time: string; update(value: string): void }) {
	// component logic

	// component layout
	return (
		<div class="flex justify-center text-center">
			<input
				class="input input-xl input-ghost grow"
				type="time"
				value={props.time}
				on:change={(e) => props.update(e.target.value)}
			/>
		</div>
	);
}
