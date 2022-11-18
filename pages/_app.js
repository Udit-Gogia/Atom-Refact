import { useEffect } from 'react'
import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    const token = localStorage.getItem("token");

		if (!localStorage.getItem("userData")) {
			const userData = { userId: undefined, postLiked: [] , token : undefined};
			localStorage.setItem("userData", JSON.stringify(userData));
		}

		token ? setUserLoggedIn(true) : setUserLoggedIn(false);
  })

  return (
    <div className="flex flex-col">
      <Header />
      <Component {...pageProps} />
    </div>
  );
  
}

export default MyApp
