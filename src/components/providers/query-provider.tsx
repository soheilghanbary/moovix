import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { PropsWithChildren } from "react"

const client = new QueryClient()

export const QueryProvider = ({ children }: PropsWithChildren) => {
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
