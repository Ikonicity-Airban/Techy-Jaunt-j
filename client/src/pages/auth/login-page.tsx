import { ChangeEventHandler, FormEventHandler, useState } from "react";

import { GetOneDoc } from "../../api/juno/actions";
import { IILoginUser } from "../../api/types";
import Input from "../../components/Input";
import { PasswordInput } from "../../components";
import { PiAt } from "react-icons/pi";
import { signIn } from "@junobuild/core";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// interface ILoginForm {
//   email: string;
//   password: string;
// }

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
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
    toast.loading("fetch your account", {
      id: "loading",
    });
    e.preventDefault();

    try {
      const userResult = await GetOneDoc<IILoginUser>("user", data.email);

      if (userResult.data || userResult.data.password !== data.password) {
        toast.error("invalid Email or password", {
          id: "loading",
        });
        return;
      }

      toast.success("verified", {
        id: "loading",
      });
      
      toast.success("logging In with ICP");

      sessionStorage.setItem("user", JSON.stringify(userResult));
      await signIn();

      navigate("/dashboard", {
        replace: true,
        preventScrollReset: true,
      });
    } catch (error) {
      toast.error(error.message, {
        id: "loading",
      });
    } finally {
      setLoading(false);
    }
  };

  const signInWithICP = async () => {
    try {
      await signIn();
      navigate("/dashboard", {
        replace: true,
        preventScrollReset: true,
      });
    } catch (error) {
      toast.error("login unsuccessful", {
        id: "loading",
      });
    }
  };

  return (
    <section className="space-y-8 my-4 flex-1 h-full w-full">
      <form className="space-y-4" onSubmit={onSubmit}>
        <h3 className="bg-gradient-to-tl from-red-400 text-center to-orange-500 text-transparent bg-clip-text">
          Login Form
        </h3>
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
            className="btn-neu-pop w-full disabled:bg-gray-400 text-light bg-green-500 active:shadow-none transition-shadow duration-150"
            type="submit"
          >
            <span className="">{loading ? "loading" : "Login"}</span>
          </button>
        </div>
      </form>
      <div className="flex w-full items-center gap-2">
        <span className="h-[2px] bg-[#0004] flex-1" />
        <p className="text-xs font-normal min-w-fit">or</p>
        <span className="h-[2px] bg-[gray] flex-1" />
      </div>
      <div className="pb-10">
        <button
          type="button"
          onClick={signInWithICP}
          className="btn-neu-pop w-full active:shadow-none transition-shadow duration-150"
        >
          <img
            src="data:image/jpeg;base64,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"
            alt="logo"
            height={34}
            className="h-8 mr-4 mix-blend-darken"
          />
          <span className="bg-red w-full">Sign in with ICP account</span>
        </button>
      </div>
    </section>
  );
};

export default LoginPage;
