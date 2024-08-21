import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { serchQuery } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {}, [serchQuery]);

  const fetchSearchResult = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${serchQuery}`).then((res) => {
      console.log(res);
      setResult(res?.contents);
      setLoading(false);
    });
  };

  return <div></div>;
};

export default SearchResult;
