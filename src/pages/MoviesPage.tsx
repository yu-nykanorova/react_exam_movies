import {MoviesList} from "../components/movies/MoviesList.tsx";
import {MainPoster} from "../components/movies/MainPoster.tsx";
import {useAppDispatch} from "../store/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../store/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../store/slices/movieSlice.ts";
import {genreSliceActions} from "../store/slices/genreSlice.ts";
import {GenresList} from "../components/genres/GenresList.tsx";

export const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const {genres, loading: loadingGenres, error: errorGenres} = useAppSelector(({genreSlice}) => genreSlice);
    const {movies, moviesListLoading: loadingMovies, error: errorMovies} = useAppSelector(({movieSlice}) => movieSlice);

    useEffect(() => {
        if (!movies.length) {
            dispatch(movieSliceActions.loadMovies());
        }
        if (!genres.length) {
            dispatch(genreSliceActions.loadGenres());
        }
    }, [movies.length, genres.length, dispatch]);

    const mainMovie = movies.length
        ? [...movies].sort((a, b) => b.vote_average - a.vote_average)[0]
        : null;

    return (
        <div>
            <MainPoster movie={mainMovie}/>
            {loadingGenres && <p className="text-[24px] text-yellow-600">Loading genres list...</p>}
            {errorGenres && <p className="text-[20px] text-red-600">{errorGenres}</p>}
            <GenresList genres={genres} />
            {loadingMovies && <p className="text-[24px] text-yellow-600">Loading movies list...</p>}
            {errorMovies && <p className="text-[20px] text-red-600">{errorMovies}</p>}
            <MoviesList movies={movies} />
        </div>
    );
};
