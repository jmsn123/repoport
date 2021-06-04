import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";

const useData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getData(url)
      .then((res) => {
        console.log(url);
        // allows me to use two apis is it bullet proof time will tell
        setData(typeof url !== "undefined" ? res.data : res.data.data);
      })
      .catch((err) => console.log(err));

    return () => {
      setData([]);
    };
  }, []);

  return [data];
};

export default useData;
