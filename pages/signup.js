import { useState } from "react";
import { InputComponent } from "../components/input";
import { SignupModal } from "../components/Modals";
import { loginUser, signupUser } from "../components/authFunctions";
export default function Signup() {
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:w-1/3 mx-auto border-2 rounded-md p-8 sm:w-full my-8">
      <form>
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
