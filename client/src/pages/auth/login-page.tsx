import { Button, Label, Select, TextInput } from "flowbite-react"

import { IoSend } from "react-icons/io5"
import { Link } from "react-router-dom"

const formData = [
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
]
const LoginPage = () => {
    return (
        <div className="px-2">

            <form className=" space-y-6">
                <Select>
                    <option>
                        University of Nigeria Nsukka
                    </option>
                </Select>
                {formData.map((item) => <div key={item.name}>
                    <Label className="text-sm">{item.title}</Label>
                    <TextInput className="bg-transparent" {...item} />
                </div>)}
            </form>

            <Link to="/" className="text-sm text-blue-700 mt-4" >
                Forgot Password ?
            </Link>

            <Button gradientMonochrome="teal" className='my-10' fullSized >
                <span className=''>Login </span>
                <IoSend className='ml-3' />
            </Button>

        </div>
    )
}

export default LoginPage