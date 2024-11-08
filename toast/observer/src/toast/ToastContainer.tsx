import { useEffect } from "react";
import observable from "./observable";
import Toast from "./Toast";
import { useToast } from "./useToast";

const ToastContainer = () => {
	const { toastList, removeToast, addToast } = useToast();
	const subject = observable;
	useEffect(() => {
		subject.addObserver(addToast);
		return () => {
			subject.removeObserver(addToast);
		};
	}, []);

	return (
		<div>
			{toastList.map((toast) => (
				<Toast key={toast.id} removeToast={removeToast} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
