import Toast from "./Toast";
import { getToastList } from "./toast.util";

const ToastContainer = () => {
	const toastList = getToastList();

	return (
		<div>
			{toastList.map((toast) => (
				<Toast key={toast.id} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
