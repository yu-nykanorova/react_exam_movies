import type {IMovieResponse} from "../models/movie/IMovieResponse.ts";
import {getItems} from "./api.service.ts";
import type {IMovieDetails, IMovieShort} from "../models/movie/IMovie.ts";
import type {IGenreResponse} from "../models/genre/IGenreResponse.ts";
import type {IGenre} from "../models/genre/IGenre.ts";

export type GetMoviesParams = {
    genresIds?: number[];
    page?: number;
};

export type SearchQueryParams = {
    query: string;
    page: number;
}

export const moviesService = {
    getMovies: async (params?: GetMoviesParams): Promise<IMovieShort[]> => {
        const queryParams: { page?: number; with_genres?: string } = {};

        if (params?.page) {
            queryParams.page = params.page;
        }

        if (params?.genresIds?.length) {
            queryParams.with_genres = params.genresIds.join(",");
        }

        const response = await getItems<IMovieResponse>("/discover/movie", queryParams);
        return response.results;
    },
    getMovieById: async (id: string): Promise<IMovieDetails> => {
        return await getItems<IMovieDetails>(`/movie/${id}`);
    },
    getGenres: async (): Promise<IGenre[]> => {
        const response = await getItems<IGenreResponse>("/genre/movie/list");
        return response.genres;
    },
    searchMovies: async (query: SearchQueryParams): Promise<IMovieShort[]> => {
        const response = await getItems<IMovieResponse>("/search/movie", query);
        return response.results;
    }
};


