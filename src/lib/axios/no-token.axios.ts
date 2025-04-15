import axios from "axios";

import ENV from "@/lib/env.config";

axios.defaults.withCredentials = true;
export const noTokenAxios = axios.create({
  baseURL: `${ENV.BASE_URL}/`,
  withCredentials: false,
});
