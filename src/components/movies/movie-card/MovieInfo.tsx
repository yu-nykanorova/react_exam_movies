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

    const shortOverview = movie.overview.split(" ").slice(0, 10).join(" ");

    return (
        <div className="p-2 grid grid-rows-[50px_50px_80px] gap-2">
            <h3 className="text-[22px] text-brand-light-blue leading-7">{movie.title}</h3>
            <div className="flex items-center gap-2 flex-wrap self-start">
                {
                    movieGenres.map(genre => (
                        <GenreBadge
                            key={genre.id}
                            genre={genre}
                            className="px-1 text-[14px] text-brand-black bg-brand-light-gray rounded-md"
                        />
                    )).slice(0, 6)
                }
                {
                    movieGenres.length > 6 ? <span>. . .</span> : ""
                }
            </div>
            <p>{shortOverview} . . .</p>
        </div>
    );
};
