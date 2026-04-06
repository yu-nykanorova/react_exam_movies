import {useSearchParams} from "react-router-dom";

export const Pagination = ({totalPages}: {totalPages: number}) => {
    const [searchParams, setSearchParams] = useSearchParams({page: "1"});

    const currentPage = Number(searchParams.get("page")) || 1;

    const handleClickPrev = () => {
        if (currentPage > 1) {
            const newParams = new URLSearchParams(String(searchParams));
            newParams.set("page", String(currentPage - 1));
            setSearchParams(newParams);
        }
    }

    const handleClickNext = () => {
        const newParams = new URLSearchParams(String(searchParams));
        newParams.set("page", String(currentPage + 1));
        setSearchParams(newParams);
    }

    return (
        <div className="max-w-100 mx-auto my-8 p-4 flex items-center justify-center gap-6">
            <button
                className="px-3 py-1 flex items-center justify-center text-brand-black text-md bg-brand-light-blue rounded-md shadow-md enabled:hover:bg-brand-white transition disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                onClick={handleClickPrev}
                disabled={currentPage === 1 || currentPage > 500}
            >
                Prev
            </button>
            <div>{currentPage <= 500 ? currentPage : 0} / {totalPages <= 500 ? totalPages : 500}</div>
            <button
                className="px-3 py-1 flex items-center justify-center text-brand-black text-md bg-brand-light-blue rounded-md shadow-md enabled:hover:bg-brand-white transition disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                onClick={handleClickNext}
                disabled={currentPage >= totalPages}
            >
                Next
            </button>
        </div>
    );
};
