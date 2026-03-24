import { forwardRef } from "react";
import { Link, type LinkProps } from "react-router";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseLinkButtonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
} & LinkProps;

/**
 * Botão baseado em Link
 * Responsável por navegação mantendo estilo de botão
 */
const BaseLinkButton = forwardRef<HTMLAnchorElement, BaseLinkButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            isLoading = false,
            className = "",
            children,
            ...rest
        },
        ref,
    ) => {
        const variantStyles = {
            primary: "bg-[#f15b2c] text-white hover:opacity-90",
            secondary: "bg-gray-200 text-black hover:bg-gray-300",
            ghost: "bg-transparent text-black hover:bg-gray-100",
        };

        const sizeStyles = {
            sm: "h-8 px-3 text-sm",
            md: "h-10 px-4 text-sm",
            lg: "h-12 px-6 text-base",
        };

        return (
            <Link
                ref={ref}
                className={`inline-flex items-center justify-center rounded-md font-medium transition focus:ring-2 focus:ring-black focus:outline-none ${
                    variantStyles[variant]
                } ${sizeStyles[size]} ${className}`}
                {...rest}
            >
                {isLoading ? "Carregando..." : children}
            </Link>
        );
    },
);

BaseLinkButton.displayName = "BaseLinkButton";

export default BaseLinkButton;
