import { useMutation } from "@tanstack/react-query";
import { api } from "../config/axios";

interface PostUpdatePayload {
  title?: string;
  content?: string;
}

export const useUpdatePost = (postId: string) => {
  return useMutation({
    mutationKey: ["update-post", postId],
    mutationFn: async ({ title, content }: PostUpdatePayload) => {
      return await api.put(`/post/update/${postId}`, { title, content });
    },
  });
};
