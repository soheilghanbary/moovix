import { NowPlayingMovies } from "@/components/shared/movie-list/now-playing"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
	component: () => (
		<div>
			<NowPlayingMovies />
		</div>
	),
})
