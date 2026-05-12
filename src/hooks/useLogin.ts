import { useMutation } from "@tanstack/react-query";
import { api } from "../config/axios";

interface LoginPayload {
  email: string;
  password: string;
}

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }: LoginPayload) => {
      return api.post(`/auth/login`, { email, password });
    },
  });
};
