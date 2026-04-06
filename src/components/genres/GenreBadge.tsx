import type {FC} from "react";
import type {IGenre} from "../../models/genre/IGenre.ts";

type GenreBadgeProps = {
    genre: IGenre,
    className?: string,
    onClick?: () => void,
}

export const GenreBadge: FC<GenreBadgeProps> = ({genre, className, onClick}) => {

    if (!genre) return null;

    return (
        <div
            className={`flex items-center justify-center ${className}`}
            onClick={onClick}
        >
            {genre.name}
        </div>
    );
};
