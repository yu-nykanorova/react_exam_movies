import {SearchIcon} from "../icons/SearchIcon.tsx";

export const Search = () => {
    return (
        <div className="h-8 flex items-center justify-between relative">
            <input type="text" className="w-50 h-full p-1 bg-brand-gray rounded-md"/>
            <div className="h-full p-1 absolute right-0 flex items-center justify-center cursor-pointer">
                <SearchIcon/>
            </div>
        </div>
    );
};
