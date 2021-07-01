import { useEffect, useState } from "react";
import md5 from "md5";

const ts = Number(new Date());
const privateKey = "6f381a4da3921d1e9f2ab0c68144d68887d55157";
const publicKey = "6219e9ab01efc0296384d5fd7dec983a";
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

      //   if (search) {
      try {
        const searchData = await fetch(urlFetch);
        const searchResult = await searchData.json();
        setResultApi(searchResult.data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
      //   }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { resultApi, isLoading, isError };
}
