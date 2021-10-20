import axios from 'axios';


axios.interceptors.response.use(null, (error) => {
  const expectedError = error.response && error.response.status >= 403;
  if (expectedError) alert("Form validation is wrong,please fill the form correctlly");
  return Promise.reject(error);
});
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
  };