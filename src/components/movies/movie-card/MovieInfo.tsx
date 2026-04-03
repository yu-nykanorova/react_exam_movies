import type {IMovieShort} from "../../../models/movie/IMovie.ts";
import type {FC} from "react";
import {GenreBadge} from "../../genres/GenreBadge.tsx";
import {useAppSelector} from "../../../store/hooks/useAppSelector.tsx";
import type {IGenre} from "../../../models/genre/IGenre.ts";

type MovieInfoProps = {
    movie: IMovieShort;
}

export const MovieInfo: FC<MovieInfoProps> = ({movie}) => {
    const allGenres: IGenre[] = useAppSelector(state => state.genreSlice.genres);
    const movieGenres: IGenre[] = allGenres.filter(genre => movie.genre_ids.includes(genre.id));

    return (
        <div className="">
            <h3 className="text-[28px] text-brand-light-blue leading-8">{movie.title}</h3>
            <div className="flex items-center gap-2 flex-wrap">
                {
                    movieGenres.map(genre => (
                        <GenreBadge
                            key={genre.id}
                            name={genre.name}
                            className="px-2 py-1 text-sm text-brand-white bg-brand-gray rounded-md"
                        />
                    ))
                }
            </div>
            <p>{movie.overview.slice(0, 100)}...</p>
        </div>
    );
};
