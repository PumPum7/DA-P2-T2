import {FormEvent} from "react";

export default function postAddHandle(event:  FormEvent<HTMLFormElement>, currentLength: number): {title: string; body: string; id: number;} {
	event.preventDefault();
	// @ts-ignore
	const title = event.target.elements.title.value;
	// @ts-ignore
	const body = event.target.elements.body.value;
	return {
		title: title,
		body: body,
		id: currentLength+1
	}
}