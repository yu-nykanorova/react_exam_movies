import type {IMovieShort} from "../../../models/movie/IMovie.ts";
import type {FC} from "react";
import {PosterPreview} from "./PosterPreview.tsx";
import {MovieInfo} from "./MovieInfo.tsx";
import {StarsRating} from "../StarsRating.tsx";
import {Link} from "react-router-dom";

type MovieProps = {
    movie: IMovieShort;
}

export const MoviesListCard: FC<MovieProps> = ({movie}) => {
    return (
        <li className="pb-2 flex flex-col gap-2 bg-brand-gray rounded-md shadow-md transition hover:scale-102 hover:shadow-xl">
            <Link to={`movie/${movie.id}`}>
                <PosterPreview movie={movie}/>
                <MovieInfo movie={movie}/>
                <StarsRating rating={movie.vote_average}/>
            </Link>
        </li>
    );
};
