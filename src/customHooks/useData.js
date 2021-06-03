import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";

const useData = (url) => {
  const [data, setData] = useState();

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  useEffect(() => {
    API.getData(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return [data];
};

export default useData;
