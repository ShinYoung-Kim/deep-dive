import { forwardRef, useImperativeHandle, useState } from "react";
import ToastContainer from "./ToastContainer";
import ReactDOM from "react-dom";
import { Message, ToastList } from "./toast.type";
import { useToast } from "./useToast";

const Portal = forwardRef((props, ref) => {
	const [toastList, setToastList] = useState<ToastList>([]);
	const { id, loaded } = useToast();

	const addToast = (message: Message) => {
		setToastList([...toastList, { message, id: Date.now() }]);
	};
	const removeToast = (id: number) => {
		setToastList(toastList.filter((toast) => toast.id !== id));
	};

	useImperativeHandle(ref, () => ({
		addToast,
	}));

	return loaded ? (
		ReactDOM.createPortal(
			<div>
				<ToastContainer toastList={toastList} removeToast={removeToast} />
			</div>,
			document.getElementById(id) as Element
		)
	) : (
		<></>
	);
});

export default Portal;
