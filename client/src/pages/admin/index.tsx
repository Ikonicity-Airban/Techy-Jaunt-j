import { Button, Label, Select, TextInput } from "flowbite-react";

import { useState } from "react";

type ElementType = "input" | "select"

interface IInput {
    type: ElementType;
    collectionName: string;
    funcType: "query" | "mutation";
    func: () => unknown;
}

function AdminPage() {
    const [elementType, setElementType] = useState<ElementType>("input")
    const [colName, setColName] = useState<string>("institution")
    // const [funcType, setFuncType] = useState<IInput["funcType"]>("query")

    const [inputs] = useState<IInput[]>([{
        collectionName: colName,
        type: elementType,
        func: () => null,
        funcType: "query"
    }])

    const handleCreate = () => {
        const newForm: IInput = {
            collectionName: colName,
            func: () => null,
            type: elementType,
            funcType: "query"
        }
        console.log("🚀 ~ handleCreate ~ newForm:", newForm)
        
    }

    return (
        <main className="gap-6 p-4 flex flex-col flex-wrap font-sans" >
            <h3>Welcome to the admin page</h3>

            <section className="flex-1 min-w-[320px] space-y-6">
                <h4 className="text-center logo-clipped">Create Input</h4>

                <div className="space-y-2">
                    <Label>Choose type of Element</Label>
                    <Select onSelect={(e) => setElementType(e.currentTarget.value as ElementType)}>
                        <option disabled>
                            select a element element
                        </option>
                        <option value="input">
                            Input
                        </option>
                        <option value="select">
                            Select
                        </option>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label>Choose name</Label>
                    <TextInput value={colName} onChange={(e) => setColName(e.target.value)} />
                </div>
                <Button gradientDuoTone="greenToBlue" outline fullSized className="capitalize" onClick={handleCreate}>create form</Button>
            </section>
            <section className="flex-1 min-w-[320px] ring-1 p-2 rounded-lg mt-10">
                <h5 className="text-center mb-4">Added Form Elements</h5>
                <form action="">
                    {inputs?.map((input) => {
                        return (
                            <div>
                                <Label className="capitalize">{input.collectionName}</Label>
                                {input.type == "input" ? <TextInput placeholder={input.collectionName} /> : input.type == "select" ? <Select></Select> : null}
                            </div>
                        )
                    })}
                    <div className="mt-10">
                        {inputs.length && <Button gradientDuoTone="greenToBlue" fullSized>submit</Button>}
                    </div>
                </form>
            </section>
        </main>
    )
}

export default AdminPage