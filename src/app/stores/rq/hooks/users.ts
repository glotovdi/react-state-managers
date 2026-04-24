import { useQuery } from "@tanstack/react-query";

export function useUserReactQuery(id: number) {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((r) =>
        r.json(),
      ),
  });
}
