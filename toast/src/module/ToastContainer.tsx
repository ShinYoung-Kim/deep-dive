import { useEffect, useState } from "react";
import Observer from "./observer";
import Toast from "../common/Toast";
import { toastList, removeToast } from "./toastList";

const ToastContainer = () => {
	const [toastListState, setToastListState] = useState(toastList);
	useEffect(() => {
		Observer.addObserver(() => {
			setToastListState(() => toastList);
		});
		return () => {
			Observer.removeObserver(() => {
				setToastListState(() => toastList);
			});
		};
	}, []);

	return (
		<div>
			{toastListState.map((toast) => (
				<Toast key={toast.id} removeToast={removeToast} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
