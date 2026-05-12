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
      const formData = new FormData();
      if (title) {
        formData.append("title", title);
      }
      if (content) {
        formData.append("content", content);
      }
      return api.put(`/post/update/${postId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
  });
};
