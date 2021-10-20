import axios from 'axios';
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError = error.response && error.response.status >= 403;
  if (expectedError) toast("an unexpected error occurd");
  return Promise.reject(error);
});
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
  };