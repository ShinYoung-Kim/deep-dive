import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { Message } from "../common/toast.type";
import Toast from "../common/Toast";

export const useToast = () => {
	const addToast = (message: Message) => {
		const container = document.getElementById("root");
		const div = document.createElement("div");
		const root = createRoot(div);
		flushSync(() => {
			root.render(<Toast message={message} removeToast={removeToast} id={Date.now()} />);
		});
		container?.appendChild(document.createRange().createContextualFragment(div.innerHTML));
	};

	const removeToast = (id: number) => {
		const toast = document.getElementById(id.toString());
		toast?.remove();
	};

	return { addToast, removeToast };
};
