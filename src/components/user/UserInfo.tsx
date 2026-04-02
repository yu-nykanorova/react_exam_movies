import avatar from "../../assets/avatar_mockup.jpg";
import {ArrowDownIcon} from "../icons/ArrowDownIcon.tsx";

export const UserInfo = () => {
    return (
        <div className="h-full flex items-center justify-between gap-2">
            <div className="h-full flex items-center justify-center rounded-md">
                <img src={avatar} alt="user avatar" className="h-full rounded-md"/>
            </div>
            <div className="h-full flex flex-col items-center justify-center">
                <p className="text-sm">Username</p>
                <ArrowDownIcon/>
            </div>
        </div>
    );
};


