import { useEffect, useState } from "react";
import Observer from "./observer";
import { closure } from "./closure";
import Toast from "../common/Toast";

const ToastContainer = () => {
	const { getToastList, removeToast } = closure;
	const [toastListState, setToastListState] = useState(getToastList());
	useEffect(() => {
		Observer.addObserver(() => {
			setToastListState(getToastList());
		});
		return () => {
			Observer.removeObserver(() => {
				setToastListState(getToastList());
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
