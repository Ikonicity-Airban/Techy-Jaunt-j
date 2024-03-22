import { PiEyeClosed, PiGraduationCap, PiLock, PiUser } from "react-icons/pi";
import { SubmitHandler, useForm } from "react-hook-form";

import { AddOneDoc } from "../../api/juno/actions";
import { ICreatedUser } from "../../api/types";
import Input from "../../components/Input";
import { InstitutionSelectInput } from "../../components";
import { useNavigate } from "react-router-dom";

const formData = [
  {
    title: "Name",
    name: "students_name",
    type: "text",
    icon: <PiUser />,
  },
  {
    title: "Matric No.",
    name: "matric_no",
    type: "text",
    icon: <PiGraduationCap />,
  },
  {
    title: "Password",
    name: "password",
    type: "password",
    rightIcon: <PiEyeClosed />,
    icon: <PiLock />,
  },
  {
    title: "Confirm Password",
    name: "confirm_password",
    type: "password",
    rightIcon: <PiEyeClosed />,
    icon: <PiLock />,
  },
];

export default function CreateAccountPage() {
  const { register, handleSubmit, reset } = useForm<ICreatedUser>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ICreatedUser> = async (data: ICreatedUser) => {
    reset();

    // await signIn();
    const result = AddOneDoc<ICreatedUser>("users", data);
    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<ICreatedUser>= ~ result:",
      result
    );

    navigate("/login", {
      replace: true,
      state: {},
    });
  };

  return (
    <form className=" space-y-6 mt-6" onSubmit={handleSubmit(onSubmit)}>
      <InstitutionSelectInput />
      {formData.map((item) => (
        <div key={item.name}>
          <Input
            {...item}
            placeholder={item.title}
            {...register(item.name as keyof ICreatedUser)}
          />
        </div>
      ))}

      <div className="py-4">
        <button
          role="button"
          className="btn-neu-pop w-full text-light bg-green-400 active:shadow-none transition-shadow duration-150"
          type="submit"
        >
          <span className="">Sign Up</span>
        </button>
      </div>
    </form>
  );
}
