import request from "@/utils/http.js";

export function login(data) {
  return request({
    method: "post",
    url: "user/login",
    data
  });
}

export function logout() {
  return request({
    method: "post",
    url: "user/logout"
  });
}
