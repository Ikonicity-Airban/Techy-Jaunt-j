import { Button, Label, Select, TextInput } from "flowbite-react";
import { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate()

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        navigate("/login", {
            replace: true,
            state: {}
        })
    }

    return (

        <form className=" space-y-6 px-2" onSubmit={handleSubmit}>
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


            <div className="py-4">
                <Button gradientMonochrome="teal" className='' fullSized type="submit">
                    <span className=''>Sign-up</span>

                </Button>
            </div>
        </form>

    )
}
