import { Link } from "react-router-dom";
import fourOfourImg from "./assets/images/404.jpg";

export default function FourOhFour() {
  return (
    <div className="flex cabin flex-col bg-[whitesmoke] items-center justify-center min-h-screen w-screen">
      <div className="p-4 space-y-5 mx-auto max-w-md">
        <h3 className="text-center">404 page not found</h3>
        <img src={fourOfourImg} alt="404" className="mix-blend-multiply" />
        <Link to="/" className="max-w-fit mx-auto">
          <div className="btn-neu-bevel hover:">Go back home</div>
        </Link>
      </div>
    </div>
  );
}
