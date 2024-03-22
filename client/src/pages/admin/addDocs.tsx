import { Button, TextInput } from "flowbite-react";

import { nanoid } from "nanoid"
import { setManyDocs } from "@junobuild/core";
import { useState } from "react";

export default function AddDocsToDataStore() {

    const [institution, setInstitution] = useState("")
    const [department, setDepartment] = useState("")
    const [faculty, setFaculty] = useState("")

    const handleClick = async () => {

        const doc1 = {
            collection: "institution",
            doc: {
                key: nanoid(),
                data: institution
            }
        }
        const doc2 = {
            collection: "faculty",
            doc: {
                key: nanoid(),
                data: faculty
            }
        }
        const doc3 = {
            collection: "department",
            doc: {
                key: nanoid(),
                data: department
            }
        }
        await setManyDocs({ docs: [doc1, doc2, doc3] })
    }

    return (
        <section>
            <form className="p-4 space-y-4">
                <TextInput placeholder="institution" required onChange={(e) => setInstitution(e.target.value)} />
                <TextInput placeholder="faculty" onChange={(e) => setFaculty(e.target.value)} />
                <TextInput placeholder="department" onChange={(e) => setDepartment(e.target.value)} />
                <Button onClick={handleClick} fullSized>Submit</Button>
            </form>
        </section>
    )
}
