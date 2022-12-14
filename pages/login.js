import { useState, useEffect } from "react";
import { loginUser, getUserDataObject } from "../components/authFunctions";
import { useRouter } from "next/router";
import { InputComponent } from "../components/inputs";
import { alertUser } from "../components/Modals";

export default function Login() {
  const router = useRouter();
  useEffect(() => {
    const { isAuth } = getUserDataObject();
    if (isAuth) {
      router.back();
      alertUser("You have already logged in");
    }
  }, []);

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <div className="flex flex-col w-1/3 mx-auto border-2 rounded-md p-8 my-8 ">
      <form className="flex flex-col gap-4">
        <InputComponent
          label="username"
          Name="inputUsername"
          value={loginUsername}
          stateMng={setLoginUsername}
          type="text"
        />
        <InputComponent
          label="password"
          Name="loginPassword"
          value={loginPassword}
          stateMng={setLoginPassword}
          type="password"
        />

        <button
          className="AuthButton"
          onClick={async (e) => {
            e.preventDefault();
            const res = await loginUser(loginUsername, loginPassword);

            if (res != undefined) {
              router.push("/");
            }
          }}
        >
          login
        </button>
      </form>
    </div>
  );
}
