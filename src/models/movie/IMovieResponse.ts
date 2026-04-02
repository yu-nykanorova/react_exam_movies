import type {IMovieShort} from "./IMovie.ts";

export interface IMovieResponse {
    page: number;
    results: IMovieShort[];
    total_pages: number;
    total_results: number;
}