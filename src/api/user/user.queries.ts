import type { UserType } from "@/types/users.type";
import { useQuery, type UseQueryReturnType } from "@tanstack/vue-query";
import { fetchUsers } from "./user.api";

function requestUsers(
  staleTime: number = 0
): UseQueryReturnType<UserType[], Error> {
  return useQuery({
    queryKey: ["fetch-users"],
    queryFn: () => fetchUsers(),
    staleTime,
  });
}

export { requestUsers };
