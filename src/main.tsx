import { QueryProvider } from "@/components/providers/query-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import "@/styles/app.css"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</QueryProvider>
	</React.StrictMode>,
)
