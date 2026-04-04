import type {FC} from "react";
import type {IGenre} from "../../models/genre/IGenre.ts";
import {GenreBadge} from "./GenreBadge.tsx";

type GenresListProps = {
    genres: IGenre[];
}


export const GenresList: FC<GenresListProps> = ({genres}) => {

    return (
        <div className="p-4 grid grid-cols-[repeat(auto-fill,minmax(120px,auto))] gap-2 whitespace-nowrap">
            {
                genres.map(genre => (
                    <GenreBadge
                        key={genre.id}
                        genre={genre}
                        className="px-3 py-2 text-brand-white bg-brand-gray rounded-md cursor-pointer transition hover:text-brand-light-blue"
                    />
                ))
            }
        </div>
    );
};
