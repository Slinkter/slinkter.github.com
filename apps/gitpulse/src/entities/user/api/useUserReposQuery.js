import { useQuery } from "@tanstack/react-query";
import { fetchUserReposAPI } from "./userService";
import { STALE_TIME, GC_TIME } from "@/shared/config/config";

export const useUserReposQuery = (username) => {
  return useQuery({
    queryKey: ["user-repos", username],
    queryFn: async ({ signal }) => {
      return fetchUserReposAPI(username, signal);
    },
    enabled: Boolean(username),
    staleTime: STALE_TIME,
    gcTime: GC_TIME,
  });
};
