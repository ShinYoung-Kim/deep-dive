import { useEffect, useState } from "react";
import Toast from "./Toast";
import { SingleTon } from "./SingleTon";

const ToastContainer = () => {
	const [toastList, setToastList] = useState(SingleTon.getInstance().toasts);
	useEffect(() => {
		SingleTon.getInstance().addObserver(() => {
			setToastList(SingleTon.getInstance().toasts);
		});

		return () => {
			SingleTon.getInstance().removeObserver(() => {
				setToastList(SingleTon.getInstance().toasts);
			});
		};
	}, []);

	return (
		<div>
			{toastList.map((toast) => (
				<Toast key={toast.id} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
