import { useMutation } from "@tanstack/react-query";
import { api } from "../config/axios";

interface CommentPayload {
  content: string;
}

export const useComment = () => {
  return useMutation({
    mutationKey: ["comment"],
    mutationFn: ({ content }: CommentPayload) => {
      return api.post(`/comment`, { content });
    },
  });
};
