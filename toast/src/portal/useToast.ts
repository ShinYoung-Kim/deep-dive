import { useEffect, useState } from "react";

export const useToast = () => {
	const [loaded, setLoaded] = useState(false);
	const [id] = useState(Date.now().toString());

	useEffect(() => {
		const div = document.createElement("div");
		div.id = id.toString();
		document.getElementsByTagName("body")[0].prepend(div);

		setLoaded(true);

		return () => {
			document.getElementsByTagName("body")[0].removeChild(div);
		};
	}, [id]);

	return { id, loaded };
};
