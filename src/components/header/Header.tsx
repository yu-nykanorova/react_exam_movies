import {Search} from "../search/Search.tsx";
import {Logo} from "../logo/Logo.tsx";
import {UserInfo} from "../user/UserInfo.tsx";

export const Header = () => {
    return (
        <header className="w-300 h-16 px-4 py-2 fixed top-0 z-10 flex items-center justify-between bg-brand-black shadow-[0_3px_6px_rgba(20,20,20,0.6),0_1px_0_rgba(255,255,255,0.04)] border border-yellow-200">
            <Logo/>
            <Search/>
            <UserInfo/>
        </header>
    );
};
