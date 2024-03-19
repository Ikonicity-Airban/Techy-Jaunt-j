import { Avatar, Label, TextInput } from "flowbite-react";
import { PiCrosshair, PiUser } from "react-icons/pi";

function ProfilePage() {
  return (
    <main className="p-4">
      <header>
        <Avatar size="xl" rounded></Avatar>
      </header>
      <form
        action=""
        className="space-y-4"
      >
        <h5 className="">Account Information</h5>
        <div className="flex items-center justify-between gap-2">
          <div className="">
            <Label htmlFor="" className="text-sm">First Name</Label>
            <TextInput
              className=""
              type="text"
              icon={PiUser} />
          </div>
          <div className="">
            <Label htmlFor="" className="text-sm">Last Name</Label>
            <TextInput
              className=""
              type="text"
              icon={PiUser} />
          </div>
        </div>
        <div className="">
          <Label htmlFor="" className="text-sm">Address</Label>
          <TextInput
            className=""
            type="text"
            icon={PiCrosshair} />
        </div>
        <div className="">
          <Label htmlFor="" className="text-sm">Occupation</Label>
          <TextInput
            className=""
            type="text"
            icon={PiCrosshair} />
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="">
            <Label htmlFor="" className="text-sm">First Name</Label>
            <TextInput
              className=""
              type="text"
              icon={PiUser} />
          </div>
          <div className="">
            <Label htmlFor="" className="text-sm">Last Name</Label>
            <TextInput
              className=""
              type="text"
              icon={PiUser} />
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="">
            <Label htmlFor="" className="text-sm">First Name</Label>
            <TextInput
              className=""
              type="text"
              icon={PiUser} />
          </div>
          <div className="">
            <Label htmlFor="" className="text-sm">Last Name</Label>
            <TextInput
              className=""
              type="text"
              icon={PiUser} />
          </div>
        </div>

      </form>
    </main>
  );
}

export default ProfilePage;
