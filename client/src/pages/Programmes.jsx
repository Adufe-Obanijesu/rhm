// Importing components
import Hero from "../components/Hero";
import Programme from "../components/programmes/Programme";
import Upcoming from "../components/Upcoming";

const Programmes = () => {

    return (
        <main>

            <Hero title="our programmes" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime atque praesentium recusandae at, eligendi magni veritatis. Maxime atque praesentium recusandae at, eligendi magni veritatis." buttonName="Upcoming Programme" buttonAction="upcoming" />

            <Upcoming />

            <section className="py-16 px-10 lg:p-28 bg-lightSecondary">
                <div className="flex justify-center">
                    <h3 className="header">our programmes</h3>
                </div>
                <div className="md:grid md:grid-cols-3 gap-2 lg:gap-5">
                    <Programme />
                    <Programme />
                    <Programme />
                    <Programme />
                    <Programme />
                    <Programme />
                </div>
                <div className="mt-8 flex justify-center lg:text-base text-sm">
                    <button className="button transitionItem text-xs lg:text-sm">view more</button>
                </div>
            </section>
        </main>
    )
}

export default Programmes;