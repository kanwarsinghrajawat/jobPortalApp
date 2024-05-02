import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { jobUpdate } from "../store/reducer";

const useApi = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      limit: 10,
      offset: 0,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await response.json();
      // console.log(data);
      dispatch(jobUpdate(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useApi;
