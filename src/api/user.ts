import request from "./request";
import { API_PREFIX } from "./constant";

export function login(data: any) {
  return request({
    url: `${API_PREFIX}/sys/user/login`,
    method: "post",
    data
  });
}

export function logOut() {
  return request({
    url: `${API_PREFIX}/sys/user/logOut`,
    method: "post"
  });
}
