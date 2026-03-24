import React, { forwardRef, useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

/**
 * Input base reutilizável.
 * Responsável por padronizar estilos e permitir toggle de senha com ícone.
 */
const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
    ({ className = "", type = "text", ...rest }, ref) => {
        /**
         * Controla visibilidade da senha.
         * Responsável por alternar entre password e text.
         */
        const [isVisible, setIsVisible] = useState(false);

        const isPasswordField = type === "password";

        const inputType = isPasswordField && isVisible ? "text" : type;

        return (
            <div className="relative w-92.5">
                <input
                    ref={ref}
                    type={inputType}
                    className={`mt-1 w-full rounded-sm border border-zinc-400 bg-white px-3 py-2 pr-10 text-sm outline-none placeholder:text-sm placeholder:text-zinc-400 focus:border-amber-50 focus:ring-1 focus:ring-[#F26B41] ${className}`}
                    {...rest}
                />

                {isPasswordField && (
                    <button
                        type="button"
                        onClick={() => setIsVisible((prev) => !prev)}
                        className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-500 transition-colors hover:text-zinc-700"
                        aria-label={
                            isVisible ? "Ocultar senha" : "Mostrar senha"
                        }
                    >
                        {isVisible ? (
                            <EyeOff className="cursor-pointer" size={18} />
                        ) : (
                            <Eye className="cursor-pointer" size={18} />
                        )}
                    </button>
                )}
            </div>
        );
    },
);

BaseInput.displayName = "BaseInput";

export default BaseInput;
