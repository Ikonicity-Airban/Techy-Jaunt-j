import { Card } from "flowbite-react"
import { Link } from "react-router-dom"

function MarketPlacePage() {
    return (
        <main className="p-4">
            <header>
                <h4>Market Sites</h4>
            </header>

            <section className="grid gap-4">
                <Link to={"/restaurant"}>
                    <Card>
                        <p>
                            Restaurants
                        </p>
                    </Card>
                </Link>
                <Link to={"/grocery"}>
                    <Card>
                        <p>
                            Groceries
                        </p>
                    </Card>
                </Link>
                <Link to={"/clothing"}>
                    <Card>
                        <p>
                            Clothings & Wears
                        </p>
                    </Card>
                </Link>
                <Link to={"/frozen-foods"}>
                    <Card>
                        <p>
                            Frozen Foods
                        </p>
                    </Card>
                </Link>
            </section>
        </main>
    )
}

export default MarketPlacePage