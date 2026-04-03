import type {FC} from "react";
import {getPosterUrl} from "../../../helpers/getPosterUrl.ts";
import type {IMovieShort} from "../../../models/movie/IMovie.ts";

type PosterPreviewProps = {
    movie: IMovieShort;
}

export const PosterPreview: FC<PosterPreviewProps> = ({movie}) => {
    return (
        <div>
            <img src={getPosterUrl(movie.poster_path)} alt={movie.title}/>
        </div>
    );
};
