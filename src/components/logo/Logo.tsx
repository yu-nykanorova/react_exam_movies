import {Link} from "react-router-dom";
import {LogoIcon} from "../icons/LogoIcon.tsx";

export const Logo = () => {
    return (
        <Link to={"/"} className="h-full flex flex-col items-center justify-center gap-1 cursor-pointer transition hover:text-brand-light-blue sm:flex-row">
            <LogoIcon/>
            <p className="font-script text-sm sm:text-xl">movies DB</p>
        </Link>
    );
};
