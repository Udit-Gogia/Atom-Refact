import { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      const userData = {
        userId: undefined,
        postLiked: [],
        token: undefined,
        isAuth: false,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  });

  return (
    <div className="flex flex-col ">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
