// import { useEffect, useState } from "react";
// import axios from "axios";

/**
 * custom hook to change document title
 *
 * @param "string"- url of the api
 * @returns response of fetched data
 *
 */

// export const useAxiosPost = (url, encodedToken = "", body = "") => {
//   const [response, setResponse] = useState([]);
//   useEffect(() => {
//     (async () => {
//       try {
//         let response;
//         if (!body) {
//           response = await axios.post(url, {
//             headers: { authorization: encodedToken },
//           });
//         } else {
//           response = await axios.post(url, {

//             headers: { authorization: encodedToken },
//           });
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     })();
//   }, [url, body, encodedToken]);
//   return { response };
// };
