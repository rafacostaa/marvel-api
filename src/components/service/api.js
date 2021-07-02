import { useEffect, useState } from "react";
import md5 from "md5";

const ts = Number(new Date());
const privateKey = process.env.REACT_APP_TOKEN_PR;
const publicKey = process.env.REACT_APP_TOKEN_PB;
const hash = md5(ts + privateKey + publicKey);

export default function useDataApi() {
  const [resultApi, setResultApi] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const urlFetch = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

      setIsError(false);
      setIsLoading(true);

      try {
        const searchData = await fetch(urlFetch);
        const searchResult = await searchData.json();
        setResultApi(searchResult.data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { resultApi, isLoading, isError };
}
