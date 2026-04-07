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
            <div className="h-100 relative">
                <div className="h-full">
                    <img src={getPosterUrl(movie.backdrop_path, 780)} alt={movie.title} className="w-full h-full object-cover"/>
                </div>
                <div className="w-1/2 p-4 absolute bottom-2 left-2 bg-black/60 rounded-md">
                    <Link to={`movie/${movie.id}`}>
                        <h2 className="mb-4 text-brand-light-blue text-[32px] leading-10 transition hover:text-brand-white">{movie.title}</h2>
                    </Link>
                    <StarsRating rating={movie.vote_average} votes={movie.vote_count}/>
                </div>
            </div>
        </>
    );
};
