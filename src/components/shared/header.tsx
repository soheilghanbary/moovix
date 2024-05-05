import { Link } from "@tanstack/react-router"
import { ClapperboardIcon, SearchIcon } from "lucide-react"
import { Input } from "../ui/input"
import { ModeToggle } from "./mode-toggle"
import { Navbar } from "./navbar"

export const Header = () => {
	return (
		<header className="border-b lg:p-4 p-2 border-border/50">
			<nav className="container p-0 flex items-center justify-between gap-4">
				<div>
					<Logo />
				</div>
				<div className="hidden md:block grow">
					<Navbar />
				</div>
				<MovieSearch />
				<ModeToggle />
			</nav>
		</header>
	)
}

const Logo = () => (
	<Link href={"/"} className="flex flex-1 items-center md:grow-0">
		<ClapperboardIcon className="mr-3 h-5 w-5 text-teal-500" />
		<h3 className="font-bold">Moovito</h3>
	</Link>
)

const MovieSearch = () => {
	return (
		<div className="relative flex items-center gap-4">
			<SearchIcon className="size-4 absolute left-2.5 top-1/2 text-muted-foreground -translate-y-1/2" />
			<Input type="text" placeholder="Search Movie" className="pl-9" />
		</div>
	)
}
