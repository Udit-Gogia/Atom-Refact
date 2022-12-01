import { useState } from "react";
import { loginUser } from "../components/authFunctions";
import { useRouter } from "next/router";
import { InputComponent } from "../components/inputs";

export default function Login() {
  const router = useRouter();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <div className="flex flex-col w-1/3 mx-auto border-2 rounded-md p-8 my-8">
      <form>
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
