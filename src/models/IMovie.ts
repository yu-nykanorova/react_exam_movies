import type {IGenre} from "./IGenre.ts";

export interface IMovieBase {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    poster_path: string;
    backdrop_path: string;
    runtime: number;
    adult: boolean;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    spoken_languages: string[];
    belongs_to_collection: null;
    homepage: string;
    production_companies: IProdCompany[];
    production_countries: IProdCountry[];
    release_date: string;
    budget: number;
    revenue: number;
    status: string;
    tagline: string;
    video: boolean;
}

export interface IMovieShort extends IMovieBase {
    genre_ids: number[];
}

export interface IMovieDetails extends IMovieBase {
    genres: IGenre[];
}

export interface IProdCompany {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

export interface IProdCountry {
	iso_3166_1: string;
	name: string;
}



