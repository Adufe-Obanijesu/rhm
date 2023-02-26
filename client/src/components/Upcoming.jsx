import {FaCalendar, FaClock, FaCaretRight} from "react-icons/fa"

const Upcoming = () => {

    const background = {
        background: "linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,0.95)), url('/img/upcomingImg.jpg')",
        backgroundRepeat: "no-repeat",
        bacgroundSize: "cover",
        backgroundPosition: "center",
    }

    return (
        <section className="relative">
            <div className="flex justify-center">
                <div className="-mt-7 absolute z-20 font-bold text-secondary bg-white py-3 px-6 drop-shadow-2xl rounded-lg text-sm lg:text-lg">
                    20 days, 22 hours, 46 minutes, 14 seconds
                </div>
            </div>
            <div className="md:grid md:grid-cols-12">

                <div className="col-span-7 md:h-auto h-60 flex justify-center items-center relative z-10" style={background}>
                    <div className="">
                        <h2 className="text-center text-white text-xl lg:text-3xl tracking-wide font-bold md:mb-3 mb-1">by his spirit</h2>
                        <p className="lightgreyParagraph text-center lg:text-base text-sm">Galatians 5: 20-23</p>
                    </div>
                    <div className="absolute bottom-0 w-full bg-transparentPrimary whiteParagraph py-3">
                        <div className="lg:flex lg:justify-center gap-x-10 lg:text-base text-sm">
                            <p className="lg:mb-0 mb-1"><span ><FaCalendar className="icon" /></span>Fri, 21st February, 2023 - Sat 22nd February, 2023</p>
                            <p><span><FaClock className="icon" /></span>Starts by 9:00pm on Friday</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-5 bg-secondary relative">
                    <div className="hidden lg:block absolute -ml-1 h-full flex items-center">
                        <span><FaCaretRight style={{height: "50px"}} /></span>
                    </div>
                    <div className="py-12 px-8">
                        <h3 className="headerBorder text-white text-lg lg:text-2xl mb-3 lg:mb-6">Burden</h3>
                        <p className="lightgreyParagraph text-xs lg:text-sm mb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam totam at obcaecati ducimus. Quisquam minus a excepturi maiores eaque fugit adipisci, tempora ut? Voluptate, delectus! Doloremque commodi animi architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae natus fugiat aliquid voluptas numquam asperiores esse eligendi cumque non!
                        </p>
                        <p  className="lightgreyParagraph text-xs lg:text-sm mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem minus accusantium asperiores tempore mollitia dicta sequi, harum incidunt ullam ut architecto reprehenderit voluptate a praesentium similique consectetur neque quos.
                        </p>
                        <button className="buttonUpcoming transitionItem text-xs lg:text-sm">register</button>

                        <img src="/img/dashed circle.png" className="absolute right-0 bottom-0" alt="dashed circle" style={{height: "100px", width: "80px"}} />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Upcoming;