import React, { useEffect } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";

import { Random } from "@/types/meta/random";
import { META } from "@/lib/anime-api";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ScrollBar } from "./ui/scroll-area";

export default function RandomAnime() {
  const [random, setRandom] = React.useState<Random | null>(null);
  useEffect(() => {
    (async () => {
      const data = await META.getRandomAnime();
      setRandom(data);
    })();
  }, []);

  return (
    <ScrollArea>
      <div className="flex gap-4 overflow-x-auto ">
        {
          <Card>
            <CardContent>
              <img src={random?.image} alt="" />
            </CardContent>
          </Card>
        }
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
