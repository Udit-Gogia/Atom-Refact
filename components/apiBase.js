const baseUrlStag = "https://stag.atom.wiki";
const baseUrlProd = "https://prod.atom.wiki";
const isStag = true;
const baseUrl = isStag ? baseUrlStag : baseUrlProd;
const x = "atom";

export default async function apiBase(method , url , token = null
     , data = null , successfullMsg = null) {

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

      return {response, result};
        
     }