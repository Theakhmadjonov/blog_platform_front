import { useQuery } from "@tanstack/react-query";
import { api } from "../config/axios";

export const useGetPost = (postId: string) => {
  const { isSuccess, data, isFetching, isLoading, refetch } = useQuery({
    queryKey: ["post-data", postId],
    queryFn: async () => {
      const response = await api.get(`/post/${postId}`);

      console.log(response.data);

      return response.data;
    },
  });

  return {
    isSuccess,
    data,
    isFetching,
    isLoading,
    refetch,
  };
};
