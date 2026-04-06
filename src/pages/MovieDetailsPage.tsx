import {useParams} from "react-router-dom";
import {useAppSelector} from "../store/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../store/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../store/slices/movieSlice.ts";

export const MovieDetailsPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {movie, movieDetailsLoading, error} = useAppSelector(({movieSlice}) => movieSlice);

    useEffect(() => {
        if (id) {
            dispatch(movieSliceActions.loadMovie(id));
        }
    }, [id, dispatch]);

    return (
        <>
            {movieDetailsLoading && <p className="loading">Loading movie ...</p>}
            {error && <p className="error">{error}</p>}
            {!movieDetailsLoading && !error && movie &&
                <div>
                    {movie.title}
                </div>
            }
        </>
    );
};
