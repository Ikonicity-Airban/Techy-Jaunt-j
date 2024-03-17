import { Button, Label, Select, TextInput } from "flowbite-react";

import { IoSend } from "react-icons/io5";

const formData = [
    {
        title: "Students Name",
        name: "students_name",
        type: "text",
    },
    {
        title: "Matric No.",
        name: "matric_no",
        type: "text",
    },
    {
        title: "Password",
        name: "password",
        type: "password",
    },
    {
        title: "Confirm Password",
        name: "confirm_password",
        type: "password",
    },
]

export default function CreateAccountPage() {
    return (
        <div className="px-2">

            <form className=" space-y-6">
                <div>
                    <Label>Institution</Label>
                    <Select>
                        <option>
                            University of Nigeria, Nsukka
                        </option>
                    </Select>
                </div>
                <div>
                    <Label>Faculty</Label>
                    <Select>
                        <option>
                            Engineering
                        </option>
                    </Select>
                </div>
                <div>
                    <Label>Department</Label>
                    <Select>
                        <option>
                            Electronics Engineering
                        </option>
                    </Select>
                </div>
                {formData.map((item) => <div key={item.name}>
                    <Label className="text-sm">{item.title}</Label>
                    <TextInput className="bg-transparent" {...item} autoComplete="false" />
                </div>)}
            </form>


            <Button gradientMonochrome="teal" className='my-10 items-center' fullSized >
                <span className=''>Login </span>
                <IoSend className='ml-3' />
            </Button>

        </div>
    )
}
