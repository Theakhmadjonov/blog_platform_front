import { useMutation } from "@tanstack/react-query";
import { api } from "../config/axios";

interface CommentPayload {
  content: string;
  postId: string;
}

export const useComment = () => {
  return useMutation({
    mutationKey: ["comment"],
    mutationFn: ({ content, postId }: CommentPayload) => {
      return api.post(`/comment/post/${postId}`, { content });
    },
  });
};
