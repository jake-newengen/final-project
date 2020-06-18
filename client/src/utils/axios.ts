import axios from "axios";
import Qs from "qs";

const retrieve = async (endpoint: string, params?: { [key: string]: any }) => {
  return await axios.get(endpoint, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("s-tk")}`
    },
    paramsSerializer: function(params) {
      return Qs.stringify(params, { arrayFormat: "brackets" });
    }
  });
};

export { retrieve };
