import { PiEye, PiEyeClosed, PiLock } from "react-icons/pi";

import Input from "./Input";
import { InputHTMLAttributes } from "react";
import useModal from "../api/hooks/useModal";

function PasswordInput(props: InputHTMLAttributes<HTMLInputElement>) {
  const { toggleModal, modalState } = useModal();

  return (
    <Input
      required
      placeholder="*^%&*()!@#"
      type={modalState ? "text" : "password"}
      icon={<PiLock />}
      rightIcon={
        modalState ? (
          <PiEye onClick={toggleModal} />
        ) : (
          <PiEyeClosed onClick={toggleModal} />
        )
      }
      {...props}
    />
  );
}

export default PasswordInput;

// onChange={(e) => setPassword(e.target.value)}
// value={password}
