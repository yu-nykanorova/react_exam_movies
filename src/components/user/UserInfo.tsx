import avatar from "../../assets/avatar_mockup.jpg";
import {ArrowDownIcon} from "../icons/ArrowDownIcon.tsx";

export const UserInfo = () => {
    return (
        <div className="h-full flex flex-col items-center justify-between gap-0 sm:flex-row sm:gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-md sm:w-12 sm:h-12">
                <img src={avatar} alt="user avatar" className="h-full rounded-[50%]"/>
            </div>
            <div className="h-full flex flex-col items-center justify-center">
                <p className="text-xs sm:text-sm">Username</p>
                <ArrowDownIcon/>
            </div>
        </div>
    );
};


