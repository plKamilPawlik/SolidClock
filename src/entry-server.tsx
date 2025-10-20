// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en">
				<head>
					<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
					<link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
					<link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
					<link rel="manifest" href="/site.webmanifest" />

					<meta charset="utf-8" />
					<meta name="description" content="Simple clock app build with SolidStart" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta
						name="theme-color"
						content="#FFFFFF"
						media="(prefers-color-scheme: light)"
					/>
					<meta
						name="theme-color"
						content="#1d232a"
						media="(prefers-color-scheme: dark)"
					/>

					{assets}
				</head>
				<body>
					{children}
					{scripts}
				</body>
			</html>
		)}
	/>
));
