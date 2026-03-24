import type { ReactNode } from "react";
import HeaderNav from "./HeaderNav";

import { Link } from "react-router";
import { Container } from "../../layout/Container";

interface HeaderProps {
    logo: ReactNode;
}

const Header = ({ logo }: HeaderProps) => {
    return (
        <header className="w-full border-b border-zinc-300 bg-white px-12">
            <Container>
                <div className="mx-auto flex h-16 max-w-360 items-center justify-between">
                    <Link to="/">
                        {/* Logo */}
                        <div className="flex items-center">{logo}</div>
                    </Link>

                    {/* Navegação desktop */}
                    <HeaderNav />
                </div>
            </Container>
        </header>
    );
};

export default Header;
