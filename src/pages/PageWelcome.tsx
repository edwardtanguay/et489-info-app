import { useState } from "react"

export const PageWelcome = () => {
	const [appName, setAppName] = useState('nnn');

	return (
		<p>APPNAME: {appName}</p>
	)
}