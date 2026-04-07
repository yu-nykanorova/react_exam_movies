import {useParams} from "react-router-dom";
import {useAppSelector} from "../store/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../store/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../store/slices/movieSlice.ts";
import {Loader} from "../components/Loader.tsx";
import {ErrorComponent} from "../components/ErrorComponent.tsx";
import {getPosterUrl} from "../helpers/getPosterUrl.ts";
import {StarsRating} from "../components/movies/StarsRating.tsx";
import {GenreBadge} from "../components/genres/GenreBadge.tsx";

export const MovieDetailsPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {movie, movieDetailsLoading, error} = useAppSelector(({movieSlice}) => movieSlice);

    useEffect(() => {
        if (id) {
            dispatch(movieSliceActions.loadMovie(id));
        }
    }, [id, dispatch]);

    if (movieDetailsLoading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorComponent message={error}/>
    }

    if (!movie) {
        return <ErrorComponent message="Movie not found"/>
    }

    return (
        <>
            <div>
                <div className="h-100 relative">
                    <div className="w-full h-full">
                        <img src={getPosterUrl(movie.backdrop_path, 780)} alt={movie.title} className="w-full h-full object-cover"/>
                    </div>
                    <div className="absolute w-1/3 right-0 bottom-0 top-0 p-6 flex flex-col justify-center items-end gap-6 bg-black/40">
                        <StarsRating className="flex flex-col items-end" rating={movie.vote_average} votes={movie.vote_count}/>
                        <div className="flex flex-col items-end">
                            {
                                movie.genres.map((genre) => (
                                    <GenreBadge key={genre.id} genre={genre}/>
                                ))
                            }
                        </div>
                        <h1 className="text-[36px] text-brand-light-blue text-right leading-10">{movie.title}</h1>
                    </div>
                </div>
                <div className="h-[calc(100vh-400px)] bg-brand-gray">
                    <div className="px-6 py-6 bg-brand-light-gray">
                        <h2 className="text-brand-black">Original title: <span
                        className="text-brand-gray text-[22px] font-semibold">{movie.title}</span></h2>
                        <p className="text-brand-gray text-[14px]">Original language: {movie.original_language}</p>
                    </div>
                    <div className="px-6 py-6 flex flex-row-reverse justify-between gap-8 bg-brand-gray">
                        <div>
                            <p className="mb-4 text-[20px]">Production companies:</p>
                            <ul>
                                {
                                    movie.production_companies.map((company) => (
                                        <li key={company.id} className="mb-2 flex items-center  justify-between gap-2 border-b border-b-brand-white">
                                            <h3 className="text-[16px] text-brand-light-blue">{company.name} ({company.origin_country})</h3>
                                            <div className="w-10 h-10 p-0.5 flex items-center bg-white/20">
                                                <img src={getPosterUrl(company.logo_path, 200)} alt="company logo" className="object-cover"/>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="flex-[0_0_60%]">
                            <p className="mb-4 text-[20px]">Overview:</p>
                            <div className="mb-4 text-sm leading-6">{movie.overview}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
