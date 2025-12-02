// // utils/api.ts
// import axios, { Method } from "axios";
// import { API_BASE_URL } from "./constant";

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json ",
//   },
// });
// console.log("API Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL);


// api.interceptors.response.use(
//   (response) => {
//     // Handle successful responses  
//     return response;
//   }
//   , (error) => {
//     // Handle errors globally
//     if (error.response) {
//       // The request was made and the server responded with a status code 
//       console.error("API Error:", error.response.data);
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.error("API Error: No response received", error.request);
//     }
//     return Promise.reject(error);
//   }
// );

// const apiCall = async (endpoint: string,
//   method: Method,
//   data?: string) => {
//   try {
//     const response = await api({
//       url: endpoint,
//       method: method,
//       data: data,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("API call error:", error);
//     throw error; // Re-throw the error for further handling
//   }
// };
// export default apiCall


import axios, { Method } from "axios";
import { API_BASE_URL } from "./constant";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// GLOBAL RESPONSE HANDLING
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else if (error.request) {
      console.error("API Error: No response received");
    }
    return Promise.reject(error);
  }
);

/**
 * Global API caller
 * Works for:
 * - JSON requests
 * - multipart/form-data (images)
 */
const apiCall = async (
  endpoint: string,
  method: Method,
  data?: any,           // can be JSON or FormData
  customHeaders: Record<string, string> = {}
) => {
  try {
    const response = await api({
      url: endpoint,
      method,
      data,
      headers: {
        ...(data instanceof FormData
          ? {} // ⚠️ Let browser set multipart boundary
          : { "Content-Type": "application/json" }),
        ...customHeaders,
      },
    });

    return response.data;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

export default apiCall;
