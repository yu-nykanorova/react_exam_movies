import type {FC} from "react";
import {getPosterUrl} from "../../../helpers/getPosterUrl.ts";
import type {IMovieShort} from "../../../models/movie/IMovie.ts";

type PosterPreviewProps = {
    movie: IMovieShort;
}

export const PosterPreview: FC<PosterPreviewProps> = ({movie}) => {
    return (
        <div className="h-70 rounded-t-md">
            <img src={getPosterUrl(movie.poster_path)} alt={movie.title} className="w-full h-full object-cover rounded-t-md"/>
        </div>
    );
};
