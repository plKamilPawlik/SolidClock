import type { ParentProps } from "solid-js";

export function PageView(props: ParentProps & { class?: string }) {
	// component logic

	// component layout
	return <main class={props.class}>{props.children}</main>;
}
