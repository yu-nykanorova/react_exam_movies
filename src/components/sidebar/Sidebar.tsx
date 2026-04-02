import {NavLink} from "react-router-dom";
import {HomeIcon} from "../icons/HomeIcon.tsx";
import {HeartIcon} from "../icons/HeartIcon.tsx";
import {CalendarIcon} from "../icons/CalendarIcon.tsx";
import {SettingsIcon} from "../icons/SettingsIcon.tsx";

export const Sidebar = () => {

    const menuLinkClass = ({isActive}: {isActive: boolean}): string => {
        return `flex items-center gap-2 hover:text-brand-light-blue ${isActive ? "text-brand-light-blue" : ""}`;
    }

    return (
        <aside className="w-50 p-4 sticky top-16 h-[calc(100vh-64px)] flex-none bg-brand-black shadow-[3px_0_6px_rgba(20,20,20,0.6),1px_0_0_rgba(255,255,255,0.04)]">
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
        </aside>
    );
};
