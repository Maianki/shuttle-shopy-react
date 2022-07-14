import { useEffect, useState } from "react";
import axios from "axios";

/**
 * custom hook to change document title
 *
 * @param "string"- url of the api
 * @returns response of fetched data
 *
 */

export const useAxios = (url, encodedToken = "") => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let res;
        if (encodedToken) {
          res = await axios.get(url, {
            headers: { authorization: encodedToken },
          });
        } else {
          res = await axios(url);
        }
        setResponse(res.data[url.split("/").slice(-1)]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [encodedToken, url]);
  return { response };
};
