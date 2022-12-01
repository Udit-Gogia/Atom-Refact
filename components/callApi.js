import { alertUser } from "./Modals";
const baseUrlStag = "https://stag.atom.wiki";
const baseUrlProd = "https://prod.atom.wiki";
const isStag = true;
export const baseUrl = isStag ? baseUrlStag : baseUrlProd;
export const x = "atom";

export default async function callApi(
  method,
  url,
  token = null,
  data = null,
  successfullMsg = null
) {
  const endpoint = `${baseUrl}/${x}/${url}`;

  let options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  data && (options["body"] = `${data}`);
  token && (options.headers["token"] = `${token}`);

  const response = await fetch(endpoint, options);
  const result = await response.json();
  if (result.status && successfullMsg) {
    alertUser(successfullMsg);
  }
  return { response, result };
}
