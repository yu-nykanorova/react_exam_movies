import type {IMovieShort} from "../../models/movie/IMovie.ts";
import type {FC} from "react";
import {getPosterUrl} from "../../helpers/getPosterUrl.ts";
import {StarsRating} from "./StarsRating.tsx";
import {Link} from "react-router-dom";

type MainPosterProps = {
    movie: IMovieShort | null;
}

export const MainPoster: FC<MainPosterProps> = ({movie}) => {

    if (!movie) return null;

    return (
        <>
            <div className="h-70 relative sm:h-100">
                <div className="h-full">
                    <img src={getPosterUrl(movie.backdrop_path, 780)} alt={movie.title} className="w-full h-full object-cover"/>
                </div>
                <div className="w-full p-2 absolute bottom-2 bg-black/60 sm:p-4 lg:w-3/4 lg:left-2 lg:rounded-md">
                    <Link to={`movie/${movie.id}`}>
                        <h2 className="mb-1 text-brand-light-blue text-[22px] leading-10 transition hover:text-brand-white sm:mb-4 sm:text-[32px]">{movie.title}</h2>
                    </Link>
                    <StarsRating rating={movie.vote_average} votes={movie.vote_count}/>
                </div>
            </div>
        </>
    );
};
