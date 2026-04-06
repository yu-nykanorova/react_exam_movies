import {type FC} from "react";
import type {IGenre} from "../../models/genre/IGenre.ts";
import {GenreBadge} from "./GenreBadge.tsx";
import {useSearchParams} from "react-router-dom";

type GenresListProps = {
    genres: IGenre[];
    selected: number[];
}

export const GenresList: FC<GenresListProps> = ({genres, selected}) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = (genre: IGenre) => {
        const newParams = new URLSearchParams(String(searchParams));

        const selectedGenres = newParams.get("genres");
        const genresArray = selectedGenres ? selectedGenres.split(",") : [];

        if (genresArray.includes(String(genre.id))) {
            genresArray.splice(genresArray.indexOf(String(genre.id)), 1)
        }

        const updatedGenres = [...genresArray, String(genre.id)];

        newParams.set("genres", updatedGenres.join(","));
        newParams.set("page", "1");

        setSearchParams(newParams);
    };

    return (
        <div className="p-4 grid grid-cols-[repeat(auto-fill,minmax(120px,auto))] gap-2 whitespace-nowrap">
            {
                genres.map(genre => (
                    <GenreBadge
                        key={genre.id}
                        genre={genre}
                        className="px-3 py-2 text-brand-white bg-brand-gray rounded-md cursor-pointer transition hover:text-brand-light-blue"
                        onClick={() => handleClick(genre)}
                    />
                ))
            }
        </div>
    );
};
