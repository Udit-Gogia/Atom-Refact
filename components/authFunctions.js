import callApi from "./callApi";

export function validateRes(response, result) {
  const { status } = response;

  if (status === 200) {
    return result;
  } else if (status === 400) {
    alert(result.detail);
  } else if (status === 422) {
    alert(result.detail[0].msg);
  }
}

export async function loginUser(username, password) {
  const { response, result } = await callApi(
    "POST",
    "public/create-token",
    null,
    JSON.stringify({ username, password })
  );

  if (response.status === 200) {
    await setToken(result?.message);
  }

  return validateRes(response, result);
}

export async function signupUser(username, password) {
  const { response, result } = await callApi(
    "POST",
    "public/create-user",
    null,
    JSON.stringify({ username, password })
  );

  const { status } = response;

  if (status === 200) {
    return loginUser(username, password);
  } else validateRes(response, result);
}

export async function setToken(token) {
  const userDataObject = JSON.parse(localStorage.getItem("userData"));

  if (!userDataObject.token) {
    userDataObject.token = token;
  }
  localStorage.setItem("userData", JSON.stringify(userDataObject));
}
