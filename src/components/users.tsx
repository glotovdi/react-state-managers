import { useEffect } from "react";
import { useUserReactQuery } from "../stores/rq/hooks/users";

export function Users() {
  const { data, isLoading, error } = useUserReactQuery(1);

  useEffect(() => {
    console.log(data);
    console.log(error);
    console.log(isLoading);
  }, [data, error, isLoading]);

  //   const {
  //     data: dataUser,
  //     error: errorUser,
  //     isLoading: isLoadingUsers,
  //   } = useGetUsersQuery("");

  //   useEffect(() => {
  //     if (dataUser) console.log(dataUser.map((user) => user));
  //     console.log(errorUser);
  //     console.log(isLoadingUsers);
  //   }, [dataUser, errorUser, isLoadingUsers]);

  return (
    <>
      {isLoading && <div>isLoading...</div>}
      {!isLoading && !error && <div>{JSON.stringify(data)}</div>}
      {/* <div>{JSON.stringify(data)}</div>
      <div>{isLoading}</div>
      <div>{JSON.stringify(error)}</div> */}
    </>
  );
}
