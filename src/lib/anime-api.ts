import { Random } from "@/types/meta/random";
import type { Popular } from "../types/meta/popular";
import type { Trending } from "../types/meta/trending";

async function caller<T>(path: string, query?: Record<string, string>) {
  const baseUrl = import.meta.env.VITE_ANIME_API as string;

  const url = new URL(path, baseUrl);
  url.search = new URLSearchParams(query).toString();

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const data = (await res.json()) as T;
    return data;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error; // Re-throw the error to let the caller handle it
  }
}

function getAnime(id: string) {
  return caller(`/anime/${id}`);
}

function getTopAnime(query: string) {
  return caller(`/anime/gogoanime/${query}`);
}
function getTrendingAnime() {
  return caller<Trending>("/meta/anilist/trending");
}

function getPopularAnime() {
  return caller<Popular>("/meta/anilist/popular");
}

function getRandomAnime() {
  return caller<Random>("/meta/anilist/random-anime");
}

export const META = {
  getAnime,
  getTrendingAnime,
  getPopularAnime,
  getRandomAnime,
};
export const ANIME = {
  getTopAnime,
};
