import Message from "./Message"

const Messages = () => {

    return (
        <section className="py-16 px-10 lg:p-28 bg-white relative">
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
    )
}

export default Messages;