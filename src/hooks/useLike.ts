import { useMutation } from "@tanstack/react-query";
import { api } from "../config/axios";

export const useLike = () => {
  return useMutation({
    mutationKey: ["like"],
    mutationFn: (postId: string) => {
      const data = api.post(`/like/${postId}`);
      return data;
    },
  });
};

export const useRemoveLike = () => {
  return useMutation({
    mutationKey: ["remove-like"],
    mutationFn: async (postId: string) => {
      return await api.delete(`/like/${postId}`);
    },
  });
};
