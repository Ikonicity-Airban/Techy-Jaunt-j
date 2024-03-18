import { Button, Label, Select, TextInput } from "flowbite-react"
import { FormEventHandler } from "react"

import { IoSend } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"

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

    const navigate = useNavigate()

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        navigate("/dashboard", {
            replace: true,
            state: {}
        })
    }

    return (
        <div className="px-2">
            <form className=" space-y-6" onSubmit={handleSubmit}>
                <Select>
                    <option>
                        University of Nigeria Nsukka
                    </option>
                </Select>
                {formData.map((item) => <div key={item.name}>
                    <Label className="text-sm">{item.title}</Label>
                    <TextInput className="bg-transparent" {...item} />
                </div>)}

                <Link to="/" className="text-sm text-blue-700" >
                    Forgot Password ?
                </Link>
                <div className="py-4">
                    <Button gradientMonochrome="teal" className='' fullSized type="submit">
                        <span className=''>Login </span>
                        <IoSend className='ml-3' />
                    </Button>
                </div>
            </form>

        </div>
    )
}

export default LoginPage