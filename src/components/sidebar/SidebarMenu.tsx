import {NavLink} from "react-router-dom";
import {HomeIcon} from "../icons/HomeIcon.tsx";
import {HeartIcon} from "../icons/HeartIcon.tsx";
import {CalendarIcon} from "../icons/CalendarIcon.tsx";
import {SettingsIcon} from "../icons/SettingsIcon.tsx";

export const SidebarMenu = () => {
    const menuLinkClass = ({isActive}: {isActive: boolean}): string => {
        return `flex items-center gap-2 hover:text-brand-light-blue ${isActive ? "text-brand-light-blue" : ""}`;
    }

    return (
        <nav>
            <ul className="flex flex-col gap-8">
                <li>
                    <NavLink to={"/"} className={menuLinkClass}>
                        <HomeIcon/>
                        <p className="text-sm">Home</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/favorites"} className={menuLinkClass}>
                        <HeartIcon/>
                        <p className="text-sm">Favorites</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/upcoming"} className={menuLinkClass}>
                        <CalendarIcon/>
                        <p className="text-sm">Coming soon</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/settings"} className={menuLinkClass}>
                        <SettingsIcon/>
                        <p className="text-sm">Settings</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
