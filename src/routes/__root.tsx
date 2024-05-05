import { Header } from "@/components/shared/header"
import { Outlet, createRootRoute } from "@tanstack/react-router"

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />
			<section className="container mx-auto p-2">
				<Outlet />
			</section>
			{/* <TanStackRouterDevtools /> */}
		</>
	),
})
