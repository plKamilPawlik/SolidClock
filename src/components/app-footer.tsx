import { A, useLocation } from "@solidjs/router";
import { MaterialSymbol } from "./material-symbol";

export function AppFooter() {
	// component logic
	const location = useLocation();

	// component layout
	return (
		<footer class="sticky bottom-0 bg-base-100 pb-2">
			<nav class="dock static text-base-content/50">
				<Link
					activePath={location.pathname}
					href="/alarm"
					label="Alarm"
					symbol="alarm"
				/>
				<Link
					activePath={location.pathname}
					href="/clock"
					label="Clock"
					symbol="schedule"
				/>
				<Link
					activePath={location.pathname}
					href="/stopwatch"
					label="Stopwatch"
					symbol="timer"
				/>
			</nav>
		</footer>
	);
}

function Link(props: { activePath: string; href: string; label: string; symbol: string }) {
	// component logic
	const isActive = () => props.href === props.activePath;

	// component layout
	return (
		<A href={props.href} classList={{ "text-base-content": isActive() }}>
			<MaterialSymbol name={props.symbol} />
			<span class="dock-label">{props.label}</span>
		</A>
	);
}
