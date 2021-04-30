const token = "admin-token";

export function setToken(data) {
  return sessionStorage.setItem(token, data);
}

export function getToken() {
  return sessionStorage.getItem(token);
}

export function removeToken() {
  return sessionStorage.removeItem(token);
}
