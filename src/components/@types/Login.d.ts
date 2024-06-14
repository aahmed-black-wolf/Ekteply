import { LoginSchema } from '../@schema/Login';

export type LoginType = z.infer<typeof LoginSchema>;
