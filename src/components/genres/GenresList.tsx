import type {FC} from "react";
import type {IGenre} from "../../models/genre/IGenre.ts";
import {GenreBadge} from "./GenreBadge.tsx";

type GenresListProps = {
    genres: IGenre[];
}

export const GenresList: FC<GenresListProps> = ({genres}) => {
    return (
        <div className="p-2 flex gap-4 flex-wrap">
            {
                genres.map(genre => (
                    <GenreBadge
                        key={genre.id}
                        name={genre.name}
                        className="px-3 py-2 text-brand-black bg-brand-light-blue font-semibold rounded-md"
                    />
                ))
            }
        </div>
    );
};
