import type {FC} from "react";
import {useSearchParams} from "react-router-dom";
import type {IGenre} from "../../models/genre/IGenre.ts";

type GenreBadgeProps = {
    genre: IGenre,
    className?: string,
}

export const GenreBadge: FC<GenreBadgeProps> = ({genre, className}) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = () => {
        const newParams = new URLSearchParams(String(searchParams));

        const selectedGenres = newParams.get("genres");
        const genresArray = selectedGenres ? selectedGenres.split(",") : [];

        if (genresArray.includes(String(genre.id))) return;

        const updatedGenres = [...genresArray, String(genre.id)];

        newParams.set("genres", updatedGenres.join(","));
        newParams.set("page", "1");

        setSearchParams(newParams);
    };

    if (!genre) return null;

    return (
        <div
            className={`flex items-center justify-center ${className}`}
            onClick={handleClick}
        >
            {genre.name}
        </div>
    );
};
