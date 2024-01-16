import React, { useEffect } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Popular } from "@/types/meta/popular";
import { META } from "@/lib/anime-api";
import { ScrollBar } from "./ui/scroll-area";

export default function Popular() {
  const [popular, setPopular] = React.useState<Popular | null>(null);

  useEffect(() => {
    (async () => {
      const data = await META.getPopularAnime();
      setPopular(data);
    })();
  }, []);

  return (
      <ScrollArea>
      <div className="flex gap-4 overflow-x-auto ">
        {popular?.results.map((el) => (
          <Card className="min-w-[10rem] ">
            <img src={el.image} className="" alt="" />
            <CardFooter>
              <p className="truncate font-bold pt-2 ">{el.title.english}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
