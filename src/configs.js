const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const appApi = (path) => `${REACT_APP_API_URL}/${path}`;

// API call routes
export const endpoints = (version) => ({
  userLogin: appApi("v1/user"),
});
export const DEFAULT_API_KEY = process.env.REACT_APP_DEFAULT_API_KEY;

export const REACT_APP_URL = process.env.REACT_APP_URL;
