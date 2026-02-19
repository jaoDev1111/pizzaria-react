import BaseLinkButton from "../../base/BaseLinkButton";

/**
 * HeaderNav
 * Responsável por renderizar navegação principal
 */
const HeaderNav = () => {
    return (
        <div>
            <BaseLinkButton to="/login" variant="primary" size="sm">
                Entrar
            </BaseLinkButton>
        </div>
    );
};

export default HeaderNav;
