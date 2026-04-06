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
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.delete("searchQuery");
        const selectedGenres = newParams.get("genres");
        const genresArray = selectedGenres ? selectedGenres.split(",") : [];

        const updatedGenres = !genresArray.includes(String(genre.id)) ?
            [...genresArray, String(genre.id)]
            :
            genresArray.filter(item => item !== String(genre.id));

        if (updatedGenres.length) {
            newParams.set("genres", updatedGenres.join(","));
        } else {
            newParams.delete("genres");
        }

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
                        className={`px-3 py-1 rounded-md cursor-pointer transition text-[14px] ${!selected.includes(genre.id) ? "text-brand-white bg-brand-gray hover:text-brand-light-blue" : "text-brand-black font-semibold bg-brand-light-blue"}`}
                        onClick={() => handleClick(genre)}
                    />
                ))
            }
        </div>
    );
};
