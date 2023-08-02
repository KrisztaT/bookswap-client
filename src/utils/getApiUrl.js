// function to get the appropriate API base URL based on the current hostname.
export const getApiBaseUrl = () => {
    const hostname = window.location.hostname;
  
    // if the hostname is "localhost", use the development backend URL from the environment variables.
    if (hostname === "localhost") {
      return process.env.REACT_APP_DEV_BACKEND_URL;
    } else {
      // otherwise, use the production backend URL from the environment variables.
      return process.env.REACT_APP_PROD_BACKEND_URL;
    }
  };
  