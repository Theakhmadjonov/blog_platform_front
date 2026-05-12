import { useMutation } from "@tanstack/react-query";
import { api } from "../config/axios";

interface RegisterPayload {
  email: string;
  name: string;
  password: string;
}

export const useRegister = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, name, password }: RegisterPayload) => {
      return api.post(`/auth/register`, { email, name, password });
    },
  });
};
