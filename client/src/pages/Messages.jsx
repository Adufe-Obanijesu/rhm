// Importing components
import Message from "../components/messages/Message";
import Hero from "../components/Hero";
import Upcoming from "../components/Upcoming";

const Messages = () => {

    return (
        <main>
            <Hero title="our messages" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime atque praesentium recusandae at, eligendi magni veritatis. Maxime atque praesentium recusandae at, eligendi magni veritatis." buttonName="Download Messages" buttonAction="messages" />
            <section className="py-16 px-10 lg:p-28 bg-lightSecondary relative">
                <div className="flex justify-center">
                    <h3 className="header">our messages</h3>
                </div>
                <div className="md:grid md:grid-cols-3 gap-2 lg:gap-5">
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                </div>
                <div className="mt-8 flex justify-center lg:text-base text-sm">
                    <button className="button transitionItem text-xs lg:text-sm">view more</button>
                </div>
            </section>
            <Upcoming />
            <br />
        </main>
    )
}

export default Messages;