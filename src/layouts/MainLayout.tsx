import {Outlet} from "react-router-dom";
import {Header} from "../components/header/Header.tsx";
import {Sidebar} from "../components/sidebar/Sidebar.tsx";
import bgImage from "../assets/movie-bg.webp";

export const MainLayout = () => {
    return (
        <div style={{backgroundImage: `url(${bgImage})`}} className="font-sans text-brand-white bg-cover bg-center bg-fixed">
            <div className="max-w-300 min-h-screen mx-auto flex flex-col">
                <Header/>
                <div className="flex flex-1 gap-0">
                    <Sidebar/>
                    <main className="flex-1 mt-16 p-4 bg-linear-to-r from-[#202022] via-[#212126] via-40% to-[#17171A]">
                        <Outlet/>
                    </main>
                </div>
            </div>
        </div>
    );
};
