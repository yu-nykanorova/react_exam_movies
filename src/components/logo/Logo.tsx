import {Link} from "react-router-dom";
import {LogoIcon} from "../icons/LogoIcon.tsx";

export const Logo = () => {
    return (
        <Link to={"/"} className="h-full flex items-center justify-center gap-1 cursor-pointer transition hover:text-brand-light-blue">
            <LogoIcon/>
            <p className="font-script text-xl">movies DB</p>
        </Link>
    );
};
