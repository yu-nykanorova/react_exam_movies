import {MoviesListCard} from "./movie-card/MoviesListCard.tsx";
import type {IMovieShort} from "../../models/movie/IMovie.ts";
import type {FC} from "react";

type MoviesProps = {
    movies: IMovieShort[];
}

export const MoviesList: FC<MoviesProps> = ({movies}) => {

    return (
        <>

            <ul className="p-4 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
                {
                    movies.map(movie => (
                        <MoviesListCard key={movie.id} movie={movie}/>
                    ))
                }
            </ul>
        </>
    );
};
