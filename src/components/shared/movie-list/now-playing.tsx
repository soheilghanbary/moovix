import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"
import { useQuery } from "@tanstack/react-query"

export function useAllMovies(
	target: "now_playing" | "top_rated" | "upcoming" | "popular",
) {
	const base_url = "https://api.themoviedb.org/3"
	const key = import.meta.env.VITE_MOVIE_API_KEY
	return useQuery({
		queryKey: ["movies", target],
		queryFn: async () => {
			const res = await fetch(`${base_url}/movie/${target}?api_key=${key}`)
			return res.json()
		},
	})
}

export const NowPlayingMovies = () => {
	const { data, isPending } = useAllMovies("now_playing")
	if (isPending) return <p>Loading ...</p>
	return (
		<div className="space-y-4">
			<h2 className="font-black text-2xl">Now Playing</h2>
			<Separator className="bg-border/50" />
			<pre>{JSON.stringify(data.results[0], null, 2)}</pre>
			<MovieList />
		</div>
	)
}

function MovieList() {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="w-full max-w-sm"
		>
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<span className="text-3xl font-semibold">{index + 1}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
