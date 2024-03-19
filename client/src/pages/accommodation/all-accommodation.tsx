import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const AccommodationPage = () => {
  return <div className='p-4 space-y-6'>

    <header>
      <h4 className="text-center">Accommodation</h4>
    </header>
    <section className="grid gap-4 ">
      <Link to={"on-campus"}>
        <article className="grid-card">
          <Card className="w-full">
            <p>On-Campus</p>
          </Card>
        </article>
      </Link>
      <Link to={"off-campus"}>
        <article className="grid-card">
          <Card className="w-full">
            Off-campus
          </Card>
        </article>
      </Link>
      <Link to={"on-site"}>
        <article className="grid-card">
          <Card className="w-full">
            On-Site
          </Card>
        </article>
      </Link>
    </section>
  </div >



};

export default AccommodationPage;