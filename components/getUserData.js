import { validateRes } from "./authFunctions";
import callApi from "./callApi";

export default async function getUserData() {
  const { token } = JSON.parse(localStorage.getItem("userData"));

  const { response, result } = await callApi(
    "GET",
    "private/self/read-user",
    token
  );

  return validateRes(response, result);
}
