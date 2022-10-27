import axios from "axios";
import React, { Fragment } from "react";
import { useQuery } from "react-query";

function UseQuery({ queryKey }) {
  const queryInfo = useQuery(
    ["names", queryKey],
    async () => {
      // await new Promise((res) => setTimeout(res, 1000));
      // if (true) {
      //   throw new Error("my error");
      // }

      return axios
        .get("https://api.publicapis.org/entrie")
        .then((res) => res.data);
    },
    {
      //   refetchOnWindowFocus: false,
      staleTime: 5000, //refetch after 5s
      //   cacheTime: 2000, // remove cache files within 2s
      //   enabled: queryKey === "data2" ? false : true, // disable fetching for this "queryKey"
      // retry: 2, // when error it will retry 2 more times
      // retryDelay: 2000 // this is the delay between 2 retry
    }
  );

  if (queryInfo.isLoading) {
    return <p>loading...</p>;
  }

  if (queryInfo.isError) {
    return "error => " + queryInfo.error.messge;
  }
  if (queryInfo.isFetching) {
    return "updateting...";
  }

  return (
    <>
      <button>hi</button>
      {queryInfo.isSuccess &&
        queryInfo.data.entries.slice(0, 4).map((i, key) => (
          <Fragment key={key}>
            <h1>{i.Category}</h1>
            <p>{i.Description}</p>
          </Fragment>
        ))}
    </>
  );
}

export default UseQuery;
