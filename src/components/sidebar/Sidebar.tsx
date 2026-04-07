import {SidebarMenu} from "./SidebarMenu.tsx";

export const Sidebar = () => {

    return (
        <aside className="w-14 px-4 pt-10 pb-4 sticky top-18 h-[calc(100vh-72px)] flex-none bg-brand-black shadow-[3px_0_6px_rgba(20,20,20,0.6),1px_0_0_rgba(255,255,255,0.04)] sm:w-42">
            <SidebarMenu/>
        </aside>
    );
};
