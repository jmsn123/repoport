import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";

export function useData() {
  const [data, setData] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams();
  useEffect(() => {
    API.getBook(id)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, []);

  return [data];
}
