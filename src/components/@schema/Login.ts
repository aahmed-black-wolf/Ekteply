import { z } from 'zod';

export const LoginSchema = z.object({
  phoneNumber: z.string().min(6),
  password: z.string(),
});
