// Responsável pelo layout principal da aplicação. Header, Conteúdo e Footer.

import { Outlet } from "react-router";
import Header from "./Header/Header";

const MainLayout = () => {
    return (
        <>
            <Header
                logo={
                    <img
                        src="https://placehold.co/80x80"
                        alt="Logo"
                        className="h-8 w-23 object-cover"
                    />
                }
            />
            {/* Área dinâmica */}
            <main className="flex-1 bg-white p-6">
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
