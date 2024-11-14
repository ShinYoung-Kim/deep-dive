import { useEffect, useState } from "react";
import { SingleTon } from "./SingleTon";
import Toast from "../common/Toast";

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
				<Toast
					key={toast.id}
					removeToast={(id) => SingleTon.getInstance().removeToast(id)}
					{...toast}
				/>
			))}
		</div>
	);
};

export default ToastContainer;
