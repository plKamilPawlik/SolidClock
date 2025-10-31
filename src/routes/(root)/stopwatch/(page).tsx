import { PageView } from "~/components/page-view";
import { StopwatchButtons } from "~/fragments/stopwatch-buttons";
import { StopwatchDisplay } from "~/fragments/stopwatch-display";

export default function () {
	// component logic

	// component layout
	return (
		<PageView class="flex flex-col gap-6 p-6">
			<section class="grid min-h-12 gap-4" />
			<section class="grid min-h-12 grow">
				<StopwatchDisplay />
			</section>
			<section class="grid min-h-12">
				<StopwatchButtons />
			</section>
		</PageView>
	);
}
