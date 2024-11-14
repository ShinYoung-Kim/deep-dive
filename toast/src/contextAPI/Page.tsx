import ToastContainer from "./ToastContainer";
import { ToastProvider } from "./ToastProvider";
import TriggerButton from "./TriggerButton";

const ContextAPIPage = () => {
	return (
		<ToastProvider>
			<TriggerButton />
			<ToastContainer />
		</ToastProvider>
	);
};

export default ContextAPIPage;
