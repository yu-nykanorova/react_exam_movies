import {SearchIcon} from "../icons/SearchIcon.tsx";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {searchValidator} from "../../validators/search.validator.ts";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

type SearchFormParams = {
    search: string;
}

export const Search = () => {
    const {
        handleSubmit,
        register,
        clearErrors,
        reset,
        formState: {errors},
    } = useForm<SearchFormParams>({
        mode: "onSubmit",
        resolver: joiResolver(searchValidator)
    });

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const searchQuery = searchParams.get("searchQuery") || "";
        reset({search: searchQuery});
    }, [searchParams, reset]);

    const handleSearch = (data: SearchFormParams) => {
        const newParams = new URLSearchParams(searchParams.toString());

        newParams.delete("genres")
        newParams.set("page", "1");
        newParams.set("searchQuery", data.search);

        navigate(`/?${newParams.toString()}`);
    }

    return (
        <form className="h-8 flex items-center justify-between relative" onSubmit={handleSubmit(handleSearch)}>
            <input
                type="text"
                {...register("search")}
                onBlur={() => clearErrors("search")}
                className="w-40 h-full p-1 bg-brand-gray rounded-md sm:w-70"
            />
            {
                errors.search &&
                <div className="w-full p-0.5 absolute -bottom-full text-[14px] text-red-800 bg-white/90 rounded-md">
                    {errors.search?.message}
                </div>
            }
            <button className="h-full p-1 absolute right-0 flex items-center justify-center cursor-pointer">
                <SearchIcon/>
            </button>
        </form>
    );
};
