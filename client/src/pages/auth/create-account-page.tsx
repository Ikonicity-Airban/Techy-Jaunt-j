import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { PiAt, PiUser } from "react-icons/pi";
import { authSubscribe, setDoc } from "@junobuild/core";

import Input from "../../components/Input";
import { PasswordInput } from "../../components";
import { signIn } from "@junobuild/core";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function CreateAccountPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit: FormEventHandler = async (e) => {
    setLoading(true);
    toast.loading("setting up your account", {
      id: "loading",
    });
    e.preventDefault();
    await signIn();

    const unSubscribe = authSubscribe((user) => {
      try {
        setDoc({
          collection: "users",
          doc: {
            key: data.email,
            data: {
              ...data,
              ...user,
            },
          },
        }).then((result) => {
          console.log("User:", result);
          unSubscribe();
        });
      } catch (error) {
        toast.error(error.message, {
          id: "loading",
        });
        console.error(error);
      }
    });
    setLoading(false);
    toast.success("account created", {
      id: "loading",
    });
    navigate("/onboarding", {
      replace: true,
    });
  };

  return (
    <form className=" space-y-6 mt-6" onSubmit={onSubmit}>
      <Input
        required
        name="name"
        value={data.name}
        autoFocus
        icon={<PiUser />}
        autoCapitalize=""
        placeholder="Full Name"
        onChange={handleChange}
      />
      <Input
        required
        value={data.email}
        icon={<PiAt />}
        name="email"
        placeholder="john@example.com"
        onChange={handleChange}
      />
      <PasswordInput
        value={data.password}
        required
        name="password"
        placeholder="%^%f@3#a$@><^&"
        onChange={handleChange}
      />

      <div className="py-4">
        <button
          disabled={loading}
          role="button"
          className="btn-neu-pop w-full disabled:bg-gray-400 text-light bg-green-500 active:shadow-none transition-shadow duration-150"
          type="submit"
        >
          <span className="">{loading ? "loading" : "Sign Up"}</span>
        </button>
      </div>
    </form>
  );
}
