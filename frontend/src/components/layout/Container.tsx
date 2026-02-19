import { type ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
    const defaultClasses = "w-full max-w-7xl mx-auto  px-0 sm:px-6";

    return (
        <>
            <div className={`${defaultClasses} ${className}`}>{children}</div>
        </>
    );
};
