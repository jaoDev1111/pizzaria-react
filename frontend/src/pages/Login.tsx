import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import BaseButton from "../components/base/BaseButton";
import BaseInput from "../components/base/BaseInput";

import { loginSchema, type LoginFormData } from "../schemas/loginSchema";
import { Link } from "react-router";
import BaseLinkButton from "../components/base/BaseLinkButton";

/**
 * Página de Login.
 * Responsável por renderizar formulário centralizado.
 */
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: LoginFormData) => {
        console.log("Dados do formulário:", data);
        // Aqui você pode integrar com sua API de autenticação
        // await api.post("/login", data)
        reset();
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-100 px-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full max-w-92.5 flex-col gap-2 rounded-2xl"
            >
                <Link className="self-center" to="/">
                    <img
                        className="mb-5 self-center"
                        src="https://placehold.co/120x120"
                        alt="Logo"
                    />
                </Link>

                {/* Email */}
                <BaseInput placeholder="Email" {...register("email")} />
                {errors.email && (
                    <span className="text-xs text-red-500">
                        {errors.email.message}
                    </span>
                )}

                {/* Senha */}
                <BaseInput
                    type="password"
                    placeholder="Senha"
                    {...register("password")}
                />
                {errors.password && (
                    <span className="text-xs text-red-500">
                        {errors.password.message}
                    </span>
                )}

                <BaseButton type="submit" className="mt-3 w-full">
                    Entrar
                </BaseButton>

                <BaseLinkButton
                    to="/register"
                    type="button"
                    variant="secondary"
                    className="w-full"
                >
                    Cadastre-se
                </BaseLinkButton>
            </form>
        </div>
    );
};

export default Login;
