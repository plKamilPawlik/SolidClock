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
		<div class="text-center capitalize">
			<p>
				<span class="font-semibold text-sm">{parseDate()}</span>
			</p>
			<p>
				<span class="font-bold text-6xl">{parseTime()}</span>
			</p>
		</div>
	);
}
