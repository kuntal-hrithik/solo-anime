import React, { useEffect } from "react";

import { Trending } from "@/types/meta/trending";
import { META } from "@/lib/anime-api";
import Popular from "@/components/popular-anime";
import RandomAnime from "@/components/ramdom-anime";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const [anime, setAnime] = React.useState<Trending | null>(null);

  useEffect(() => {
    (async () => {
      const data = await META.getTrendingAnime();
      setAnime(data);
    })();
  }, []);

  return (
    <div>
      <Carousel>
        <CarouselContent>
          {anime?.results.map((anime) => (
            <CarouselItem className="relative h-[420px]">
              <img
                src={anime.cover}
                alt={anime.title.english}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />

              <div className="h-full w-full bg-gradient-to-r from-background to-transparent p-4 md:p-8">
                <h1 className="text-3xl ">{anime.title.english}</h1>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <h1 className="ml-5 mt-10">Popular anime</h1>
      <Popular />
      <h1>hello</h1>
      <RandomAnime></RandomAnime>
    </div>
  );
}
