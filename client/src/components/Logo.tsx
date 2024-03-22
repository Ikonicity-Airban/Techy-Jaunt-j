import logo from "../assets/logo.svg"

export default function Logo() {
    return (
        <div className=" shadow-pop ring-1 ring-[#fff4] rounded-full">
            <img src={logo}
                className="size-28 mix-blend-color-burn"
                alt="campus-sync-logo" />
        </div>
    )
}
