import { z } from "zod";

// Validação de criação de Cliente
export const createCustomerSchema = z.object({
  name: z.string().min(2),
  document: z.string().min(11),
  email: z.email(),
  phone: z.string().min(10),
});

export type CreateCustomerDTO = z.infer<typeof createCustomerSchema>;
