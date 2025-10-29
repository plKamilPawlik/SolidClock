import { PageView } from "~/components/page-view";
import { ClockAnalog } from "~/fragments/clock-analog";
import { ClockDigital } from "~/fragments/clock-digital";
import { ClockLocation } from "~/fragments/clock-location";

export default function () {
	// component logic

	// component layout
	return (
		<PageView class="flex flex-col gap-6 p-6">
			<ClockLocation />
			<ClockDigital />
			<ClockAnalog />
		</PageView>
	);
}
