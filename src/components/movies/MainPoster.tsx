import type {IMovieShort} from "../../models/movie/IMovie.ts";
import type {FC} from "react";
import {getPosterUrl} from "../../helpers/getPosterUrl.ts";
import {StarsRating} from "./StarsRating.tsx";

type MainPosterProps = {
    movie: IMovieShort | null;
}

export const MainPoster: FC<MainPosterProps> = ({movie}) => {

    if (!movie) return null;

    return (
        <>
            <div className="h-100 relative">
                <div className="h-full">
                    <img src={getPosterUrl(movie.backdrop_path)} alt={movie.title} className="w-full h-full object-cover"/>
                </div>
                <div className="p-4 absolute bottom-2 left-2 bg-black/50 rounded-md">
                    <h2 className="text-brand-light-blue text-[36px]">{movie.title}</h2>
                    <StarsRating rating={movie.vote_average}/>
                </div>
            </div>
        </>
    );
};
