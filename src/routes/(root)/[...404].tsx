import { A } from "@solidjs/router";
import { PageView } from "~/components/page-view";

export default function () {
	// component logic

	// component layout
	return (
		<PageView class="grid place-items-center p-6">
			<div class="flex flex-col gap-4 text-center">
				<h1 class="font-extrabold text-7xl text-primary tracking-tight lg:text-9xl">
					404
				</h1>
				<p class="font-bold text-3xl text-neutral/70 tracking-tight lg:text-4xl">
					Page not found
				</p>
				<p class="font-light text-lg">
					The page you are looking for doesn't exist.
					<br />
					Here are some helpful links:
				</p>
				<p class="flex flex-nowrap justify-center gap-2 font-light">
					<A class="link" href="/alarm">
						Alarm
					</A>
					<A class="link" href="/clock">
						Clock
					</A>
					<A class="link" href="/stopwatch">
						Stopwatch
					</A>
					|
					<A class="link" href="/settings">
						Settings
					</A>
				</p>
			</div>
		</PageView>
	);
}
