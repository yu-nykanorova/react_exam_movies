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
        const selectedGenres = searchParams.get("genres");
        const genresArray = selectedGenres ? selectedGenres.split(",") : [];

        if (genresArray.includes(String(genre.id))) return;

        const updatedGenres = [...genresArray, String(genre.id)];

        setSearchParams({genres: updatedGenres.join(",")});
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
