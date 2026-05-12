import { useMutation } from "@tanstack/react-query";
import { api } from "../config/axios";

interface PostPayload {
  title: string;
  content: string;
}

export const useCreatePost = () => {
  return useMutation({
    mutationKey: ["create-post"],
    mutationFn: ({ title, content }: PostPayload) => {
      return api.post(`/post`, { title, content });
    },
  });
};
