import axios from 'axios';

// Function to create Axios instance with a base URL
const createAxiosInstance = (baseURL) => {
  const instance = axios.create({
    baseURL: baseURL, // Set the base URL for all requests
    timeout: 10000, // Optional: Set a default timeout for requests (in milliseconds)
    headers: {
      'Content-Type': 'application/json', // Set any default headers you need
    },
  });

  // You can add interceptors for requests and responses here if needed
  instance.interceptors.request.use(
    config => {
      // Modify or log the request before it is sent
      return config;
    },
    error => {
      // Handle the request error
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    response => {
      // Handle or log the response
      return response;
    },
    error => {
      // Handle the response error
      return Promise.reject(error);
    }
  );

  return instance;
};

// Example usage
export const api = createAxiosInstance('http://localhost:5000/api');
