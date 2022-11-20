import { useEffect, useState } from 'react'
import Header from '../components/Header'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  const [isAuth , setIsAuth]  = useState(false)

  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('userData'));

		if (!localStorage.getItem("userData")) {
			const userData = { userId: undefined, postLiked: [] , token: undefined};
			localStorage.setItem("userData", JSON.stringify(userData));
		}

		token ? setIsAuth(true) : setIsAuth(false);
  })

  return (
    <div className="flex flex-col">
      <Header />
      <Component {...pageProps} />
    </div>
  );
  
}

export default MyApp
