export interface Random {
  id: string;
  title: Title;
  malId: number;
  synonyms: string[];
  isLicensed: boolean;
  isAdult: boolean;
  countryOfOrigin: string;
  trailer: Trailer;
  image: string;
  imageHash: string;
  popularity: number;
  color: string;
  cover: string;
  coverHash: string;
  description: string;
  status: string;
  releaseDate: number;
  startDate: StartDate;
  endDate: EndDate;
  totalEpisodes: number;
  currentEpisode: number;
  rating: number;
  duration: number;
  genres: string[];
  season: string;
  studios: string[];
  subOrDub: string;
  type: string;
  recommendations: Recommendation[];
  characters: Character[];
  relations: Relation[];
  episodes: string[];
}

export interface Title {
  romaji: string;
  english: string;
  native: string;
}

export interface Trailer {
  id: string;
  site: string;
  thumbnail: string;
  thumbnailHash: string;
}

export interface StartDate {
  year: number;
  month: number;
  day: number;
}

export interface EndDate {
  year: number;
  month: number;
  day: number;
}

export interface Recommendation {
  id: number;
  malId: number;
  title: Title2;
  status: string;
  episodes: number;
  image: string;
  imageHash: string;
  cover: string;
  coverHash: string;
  rating: number;
  type: string;
}

export interface Title2 {
  romaji: string;
  english?: string;
  native: string;
  userPreferred: string;
}

export interface Character {
  id: number;
  role: string;
  name: Name;
  image: string;
  imageHash: string;
  voiceActors: VoiceActor[];
}

export interface Name {
  first: string;
  last?: string;
  full: string;
  native: string;
  userPreferred: string;
}

export interface VoiceActor {
  id: number;
  language: string;
  name: Name2;
  image: string;
  imageHash: string;
}

export interface Name2 {
  first: string;
  last: string;
  full: string;
  native: string;
  userPreferred: string;
}

export interface Relation {
  id: number;
  relationType: string;
  malId: number;
  title: Title3;
  status: string;
  episodes: number;
  image: string;
  imageHash: string;
  color: string;
  type: string;
  cover: string;
  coverHash: string;
  rating: number;
}

export interface Title3 {
  romaji: string;
  english: string;
  native: string;
  userPreferred: string;
}
