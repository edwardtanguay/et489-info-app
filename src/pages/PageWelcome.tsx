import axios from "axios";
import { useEffect, useState } from "react"

const backendUrl = 'http://localhost:5123';

export const PageWelcome = () => {
	const [appName, setAppName] = useState('');

	useEffect(() => {
		(async () => {
			const response = await axios.get(backendUrl);
			setAppName(response.data.appName)
		})();
	}, []);

	return (
		<p>APPNAME: {appName}</p>
	)
}