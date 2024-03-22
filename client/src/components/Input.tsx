import { InputHTMLAttributes } from "react"

type Props = {
    rightIcon?: React.ReactNode
    icon?: React.ReactNode
    label?: string
    className?: string
} & InputHTMLAttributes<HTMLInputElement>
export default function Input({ rightIcon, icon, ...rest }: Props) {
    return (
        <div className="flex items-center btn-neu-bevel gap-3 focus:box-shadow-cool">
            {icon && <span className="flex-[0.1] text-lg text-orange-300 rounded-full shadow-pop p-1 flex items-center justify-center">
                {icon}
            </span>}
            <input
                className="flex-1 outline-none border-0 bg-transparent caret-orange-400 text-orange-400"
                autoComplete="false"
                autoFocus
                {...rest}
            />
            {rightIcon && <span className="flex-[0.1] text-lg text-orange-300 rounded-full shadow-pop p-1 flex items-center justify-center">
                {rightIcon}
            </span>}
        </div>
    )
}