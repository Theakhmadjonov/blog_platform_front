import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../config/axios";

export const useGetUserPosts = () => {
  return useQuery({
    queryKey: ["user-posts"],
    queryFn: async () => {
      const res = await api.get(`/post/user`);

      return res.data.data;
    },

    refetchOnWindowFocus: false,
    staleTime: 0,
  });
};

export const useRemoveUserPosts = () => {
  return useMutation({
    mutationKey: ["remove-user-posts"],

    mutationFn: async (postId: string) => {
      await api.delete(`/post/${postId}`);

      return true;
    },
  });
};

export const usePublishPost = () => {
  return useMutation({
    mutationKey: ["publish-post"],

    mutationFn: async (postId: string) => {
      return api.put(`/post/publish/${postId}`);
    },
  });
};
