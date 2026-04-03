import type {IMovieShort} from "../../../models/movie/IMovie.ts";
import type {FC} from "react";
import {PosterPreview} from "./PosterPreview.tsx";
import {MovieInfo} from "./MovieInfo.tsx";
import {StarsRating} from "../StarsRating.tsx";

type MovieProps = {
    movie: IMovieShort;
}

export const MoviesListCard: FC<MovieProps> = ({movie}) => {
    return (
        <li className="">
            <PosterPreview movie={movie}/>
            <MovieInfo movie={movie}/>
            <StarsRating rating={movie.vote_average}/>
        </li>
    );
};
