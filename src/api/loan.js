import request from "@/utils/http.js";

export function loanCreate(data) {
  return request({
    method: "post",
    url: "loan/create",
    data
  });
}
