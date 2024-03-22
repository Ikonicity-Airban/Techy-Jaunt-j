import { Label, Select, Spinner } from "flowbite-react";

import { BsArrowCounterclockwise } from "react-icons/bs";
import { ListDocs } from "../api/juno/actions"
import  useQuery  from "../api/hooks/useFetch"

export function InstitutionSelectInput({ ...rest }) {

    const { col: institutions, error, loading, refetch } = useQuery(() => ListDocs<string[]>("institution", {}))

    if (error || !institutions?.items_length) return (
        <div className="btn-neu-bevel" onClick={refetch}>
            {loading ? <Spinner /> : <BsArrowCounterclockwise />}
        </div>
    )



    return (
        <div className="btn-neu-bevel">
            <select className="bg-transparent w-full border-none ring-0"
                {...rest}
            >
                <option disabled>
                    Institution
                </option>

                {institutions?.items.map((item) => (
                    <option value={item.data} key={item.key}>
                        {item.data}
                    </option>
                ))}
            </select>
        </div>
    )
}

export function FacultySelectInput({ ...rest }) {

    const { col: faculties, error, loading, refetch } = useQuery(() => ListDocs<string[]>("institution", {}))

    if (error || !faculties?.items_length) return (
        <div className="w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900   dark:bg-gray-700 p-2.5 text-sm rounded-lg inline-flex justify-center " onClick={refetch}>
            {loading ? <Spinner /> : <BsArrowCounterclockwise />}
        </div>
    )



    return (
        <>
            <Label className="text-sm">Institution</Label>
            <select
                {...rest}
            >
                <option selected >
                    Choose an option
                </option>

                {faculties?.items.map((item) => (
                    <option value={item.data} key={item.key}>
                        {item.data}
                    </option>
                ))}
            </select>
        </>
    )
}

export function SSelectInput({ ...rest }) {

    const { col: departments, error, loading, refetch } = useQuery(() => ListDocs<string[]>("institution", {}))

    if (error || !departments?.items_length) return (
        <div className="w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900   dark:bg-gray-700 p-2.5 text-sm rounded-lg inline-flex justify-center " onClick={refetch}>
            {loading ? <Spinner /> : <BsArrowCounterclockwise />}
        </div>
    )



    return (
        <>
            <Label className="text-sm">Institution</Label>
            <Select
                {...rest}
            >
                <option selected >
                    Choose an option
                </option>

                {departments?.items.map((item) => (
                    <option value={item.data} key={item.key}>
                        {item.data}
                    </option>
                ))}
            </Select>
        </>
    )
}

