import {useSearchParams} from "react-router-dom";

const TOTAL_PAGES = 500;

export const Pagination = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: "1"});

    let currentPage = Number(searchParams.get("page")) || 1;

    const handleClickPrev = () => {
        if (currentPage > 1) {
            setSearchParams({page: String(--currentPage)});
        }
    }

    const handleClickNext = () => {
        setSearchParams({page: String(++currentPage)});
    }

    return (
        <div className="max-w-100 mx-auto my-8 p-4 flex items-center justify-center gap-6">
            <button
                className="px-3 py-1 flex items-center justify-center text-brand-black text-xl bg-brand-light-blue rounded-md shadow-md enabled:hover:bg-brand-white transition disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                onClick={handleClickPrev}
                disabled={currentPage === 1}
            >
                Prev
            </button>
            <div>{currentPage} / {TOTAL_PAGES}</div>
            <button
                className="px-3 py-1 flex items-center justify-center text-brand-black text-xl bg-brand-light-blue rounded-md shadow-md enabled:hover:bg-brand-white transition disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                onClick={handleClickNext}
                disabled={currentPage === TOTAL_PAGES}
            >
                Next
            </button>
        </div>
    );
};
