import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { InputComponent } from "../components/inputs";
import { SignupModal, alertUser } from "../components/Modals";

import {
  loginUser,
  signupUser,
  getUserDataObject,
} from "../components/authFunctions";
export default function Signup() {
  const router = useRouter();
  useEffect(() => {
    const { isAuth } = getUserDataObject();
    if (isAuth) {
      router.back();
      alertUser("Signout first to Signin as a new user.");
    }
  }, []);
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:w-1/3 mx-auto border-2 rounded-md p-8 sm:w-full my-8">
      <form className="flex flex-col gap-4">
        <InputComponent
          label="username"
          Name="inputUsername"
          value={signupUsername}
          stateMng={setSignupUsername}
          type="text"
        />
        <InputComponent
          label="password"
          Name="loginPassword"
          value={signupPassword}
          stateMng={setSignupPassword}
          type="password"
        />

        <button
          className="AuthButton"
          onClick={async (e) => {
            e.preventDefault();
            const res = await signupUser(signupUsername, signupPassword);

            if (res != undefined) {
              await loginUser(signupUsername, signupPassword);
              setIsOpen(true);
            }
          }}
        >
          signup
        </button>
        <SignupModal
          username={signupUsername}
          password={signupPassword}
          isOpen={isOpen}
        />
      </form>
    </div>
  );
}
