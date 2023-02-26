// Importing components
import Writeup from "../components/write-ups/Writeup";
import Hero from "../components/Hero";
import Upcoming from "../components/Upcoming";

const Writeups = () => {

    return (
        <main>
            <Hero title="our write-ups" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime atque praesentium recusandae at, eligendi magni veritatis. Maxime atque praesentium recusandae at, eligendi magni veritatis." buttonName="Download Write-ups" buttonAction="writeUps" />

            <section className="py-16 px-10 lg:p-28 bg-lightSecondary">
                <div className="flex justify-center">
                    <h3 className="header">our write-ups</h3>
                </div>
                <div className="md:grid md:grid-cols-3 gap-2 lg:gap-5">
                    <Writeup />
                    <Writeup />
                    <Writeup />
                    <Writeup />
                    <Writeup />
                    <Writeup />
                </div>
                <div className="mt-8 lg:text-base text-sm flex justify-center">
                    <button className="transitionItem button text-xs lg:text-sm">view more</button>
                </div>
            </section>

            <Upcoming />
            <br />
        </main>
    )
}

export default Writeups;