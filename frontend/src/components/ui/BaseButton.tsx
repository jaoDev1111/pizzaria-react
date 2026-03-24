import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Botão base reutilizável
 * Responsável por padronizar estilo, comportamento e acessibilidade
 */
const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            isLoading = false,
            disabled,
            className = "",
            children,
            ...rest
        },
        ref,
    ) => {
        // 🎯 Estado final de desabilitado
        const isDisabled = disabled || isLoading;

        // 🎨 Variantes
        const variantStyles = {
            primary: "bg-[#f15b2c] text-white hover:opacity-90",
            secondary: "bg-gray-200 text-black hover:bg-gray-300",
            ghost: "bg-transparent text-black hover:bg-gray-100",
        };

        // 📏 Tamanhos
        const sizeStyles = {
            sm: "h-8 px-3 text-sm",
            md: "h-10 px-4 text-sm",
            lg: "h-12 px-6 text-base",
        };

        return (
            <button
                ref={ref}
                disabled={isDisabled}
                className={`inline-flex cursor-pointer items-center justify-center rounded-md font-medium transition focus:ring-2 focus:ring-black focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${variantStyles[variant]} ${sizeStyles[size]} ${className} `}
                {...rest}
            >
                {isLoading ? "Carregando..." : children}
            </button>
        );
    },
);

export default BaseButton;

BaseButton.displayName = "BaseButton";
