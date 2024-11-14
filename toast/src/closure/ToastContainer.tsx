import { useEffect, useState } from "react";
import Observer from "./observer";
import { closure } from "./closure";
import Toast from "../common/Toast";

const ToastContainer = () => {
	const { toastList, removeToast } = closure;
	const [toastListState, setToastListState] = useState(toastList);
	useEffect(() => {
		Observer.addObserver(() => {
			setToastListState(toastList);
		});
		return () => {
			Observer.removeObserver(() => {
				setToastListState(toastList);
			});
		};
	}, [toastList]);

	return (
		<div>
			{toastListState.map((toast) => (
				<Toast key={toast.id} removeToast={removeToast} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
