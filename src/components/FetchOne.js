import React from "react";
import useFetch from "../hooks/useFetch";

const FetchOne = () => {
  const [data, loading, error] = useFetch(
    "https://pokeapi.co/api/v2/pokemon/1"
  );

  return <div>{console.log(data)}</div>;
};

export default FetchOne;
