import { datetime$ } from "~/providers/datetime";

export function ClockDigital() {
	// component logic
	const intlDate = new Intl.DateTimeFormat([], { dateStyle: "full" });
	const intlTime = new Intl.DateTimeFormat([], { timeStyle: "short" });

	const parseDate = (): string => {
		return intlDate.format(datetime$.get.date);
	};

	const parseTime = (): string => {
		return intlTime.format(datetime$.get.date);
	};

	// component layout
	return (
		<div>
			<p class="text-center text-sm capitalize">
				<span class="font-semibold">{parseDate()}</span>
			</p>
			<p class="text-center text-7xl capitalize">
				<span class="font-bold tabular-nums">{parseTime()}</span>
			</p>
		</div>
	);
}
