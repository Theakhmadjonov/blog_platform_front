import { useQuery } from "@tanstack/react-query";
import { api } from "../config/axios";

const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await api.get(`/post/all`);
      return res.data.data;
    },
    refetchOnWindowFocus: false,
    staleTime: 0,
  });
};

export default useGetPosts;
