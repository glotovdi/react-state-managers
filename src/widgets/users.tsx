import { useEffect, useState } from "react";

import { useGetUsersQuery } from "../app/stores/redux/rtkq/redux-toolkit-query";

export function Users() {
  // const { data, isLoading, error } = useUserReactQuery(1);

  // useEffect(() => {
  //   console.log(data);
  //   console.log(error);
  //   console.log(isLoading);
  // }, [data, error, isLoading]);

  const [user1, setUser2] = useState(0);

  const { data, error, isLoading } = useGetUsersQuery("");

  useEffect(() => {
    if (data) console.log(data.map((user) => user));
    console.log(error);
    console.log(isLoading);
  }, [data, error, isLoading]);

  return (
    <>
      {isLoading && <div>isLoading...</div>}
      {!isLoading && !error && <div>{JSON.stringify(data)}</div>}
      {/* <div>{JSON.stringify(data)}</div>
      <div>{isLoading}</div>
      <div>{JSON.stringify(error)}</div> */}
      <button onClick={() => setUser2(2)}> {user1}</button>
    </>
  );
}
