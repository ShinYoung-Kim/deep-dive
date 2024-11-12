import { useEffect, useState } from "react";
import Toast from "./Toast";
import Observer from "./observer";
import { closure } from "./closure";

const ToastContainer = () => {
	const { toastList } = closure;
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
				<Toast key={toast.id} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
