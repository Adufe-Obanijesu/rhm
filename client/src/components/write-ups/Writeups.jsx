import Writeup from "./Writeup"

const Writeups = () => {

    return (
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
    )
}

export default Writeups;