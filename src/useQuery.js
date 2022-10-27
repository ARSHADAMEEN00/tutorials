import axios, { CancelToken } from "axios";
import React, { Fragment } from "react";
import { useQuery } from "react-query";

function UseQuery({ queryKey }) {
  const queryInfo = useQuery(
    ["queryKey", queryKey],
    () => {
      const source = CancelToken.source();

      const promise = new Promise((resolve) => setTimeout(resolve, 1000))
        .then(() => {
          return axios.get(`https://api.publicapis.org/entrie`, {
            cancelToken: source.token,
          });
        })
        .then((res) => res.data);

      promise.cancel = () => {
        source.cancel("api bloked");
      };

      return promise;
    },
    {
      retry: 1,
    }
  );
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
