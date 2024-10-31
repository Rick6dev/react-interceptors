import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const AxiosInterceptors = () => {
  const updateHeader = (request: AxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = "Sdsds";
    const newHeaders = {
      Authorization: token,
      "Content-Type": "application/json",
    };
    request.headers = newHeaders;

    return request as InternalAxiosRequestConfig; // Cast to InternalAxiosRequestConfig
  };

  axios.interceptors.request.use((request) => {
    console.log("Starting Request", request);
    if(request.url?.includes("assets") ) return request;
    return updateHeader(request);
  });


  axios.interceptors.response.use(
    (response)=>{
        console.log("Response",response)
        return response
    }
  ,(error)=>{
    console.log(erro)
    return Promise.reject(error)

  })
};