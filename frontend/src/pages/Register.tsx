import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import BaseButton from "../components/base/BaseButton";
import BaseInput from "../components/base/BaseInput";

import {
    registerSchema,
    type RegisterFormData,
} from "../schemas/registerSchema";
import BaseLinkButton from "../components/base/BaseLinkButton";
import { Link } from "react-router";

/**
 * Página de Registro.
 * Responsável por orquestrar validação e envio do formulário.
 */
const Register = () => {
    /**
     * Inicializa formulário com validação Zod.
     * Responsável por registrar campos e controlar erros.
     */
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    /**
     * Executado após validação bem-sucedida.
     * Responsável por enviar dados para API.
     */
    const onSubmit = async (data: RegisterFormData) => {
        console.log("Dados Enviados para /register:", data);

        // Aqui você integraria com API
        // await api.post("/register", data)

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
                        className="mb-5"
                        src="https://placehold.co/120x120"
                        alt="Logo"
                    />
                </Link>

                {/* Nome */}
                <BaseInput placeholder="Nome" {...register("name")} />
                {errors.name && (
                    <span className="text-xs text-red-500">
                        {errors.name.message}
                    </span>
                )}

                {/* Email */}
                <BaseInput placeholder="Email" {...register("email")} />
                {errors.email && (
                    <span className="block text-left text-xs text-red-500">
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
                    <span className="block text-left text-xs text-red-500">
                        {errors.password.message}
                    </span>
                )}

                {/* Confirmar Senha */}
                <BaseInput
                    type="password"
                    placeholder="Confirmar senha"
                    {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                    <span className="block text-left text-xs text-red-500">
                        {errors.confirmPassword.message}
                    </span>
                )}

                <BaseButton
                    type="submit"
                    className="mt-3 w-full"
                    disabled={isSubmitting}
                >
                    Criar conta
                </BaseButton>

                <BaseLinkButton
                    to="/login"
                    type="button"
                    variant="ghost"
                    className="w-full"
                >
                    Já tenho conta
                </BaseLinkButton>
            </form>
        </div>
    );
};

export default Register;
