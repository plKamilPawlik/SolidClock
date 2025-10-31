import { PageView } from "~/components/page-view";
import { ClockAnalog } from "~/fragments/clock-analog";
import { ClockDigital } from "~/fragments/clock-digital";
import { ClockLocation } from "~/fragments/clock-location";
import { ClockWeather } from "~/fragments/clock-weather";

export default function () {
	// component logic

	// component layout
	return (
		<PageView class="flex flex-col gap-6 p-6">
			<section class="grid min-h-40 gap-4">
				<ClockLocation />
				<ClockDigital />
			</section>
			<section class="grid min-h-40 grow">
				<ClockAnalog />
			</section>
			<section class="grid min-h-40">
				<ClockWeather />
			</section>
		</PageView>
	);
}
