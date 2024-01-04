import axios from "axios";
import { useEffect, useState } from "react";

const backendUrl = "http://localhost:5123";

interface IFramework {
	name: string;
	url: string;
	description: string;
}

export const PageWelcome = () => {
	const [appName, setAppName] = useState("");
	const [frameworks, setFrameworks] = useState<IFramework[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(backendUrl);
			setAppName(response.data.appName);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/frameworks`);
			setFrameworks(response.data);
		})();
	}, []);

	return (
		<>
			<p>APPNAME: {appName}</p>
			<div>
				FRAMEWORKS:
				<ul className="list-disc ml-6">
					{frameworks.map((framework, index) => {
						return <li key={index}><a href={framework.url} target="_blank" className="underline font-semibold">{framework.name}</a> - {framework.description}</li>;
					})}
				</ul>
			</div>
		</>
	);
};
