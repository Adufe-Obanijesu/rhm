import {FaDownload} from "react-icons/fa";

const Message = () => {

    const background = {
        background: "linear-gradient(rgba(235, 78, 23, .9), rgba(235, 78, 23, .9)), url(/img/programme.jpg)",
        backgroundRepeat: "no-repeat",
        bacgroundSize: "contain",
        backgroundPosition: "center",
    }

    return (
        <div className="rounded-lg py-14 px-12 flex justify-center md:mb-0 mb-4" style={background}>
            <div>
                <h4 className="text-white opacity-90 font-medium text-sm md:text-md text-center">The Glory of the Lord</h4>
                <h5 className="text-white opacity-90 font-medium text-xs md:text-sm text-center">Isaiah 60: 1</h5>
                <div className="flex justify-center mt-2">
                    <button className="button-outline transitionItem text-xs md:text-sm">Download <span><FaDownload className="icon ml-1" /></span></button>
                </div>
            </div>
        </div>
    )
}

export default Message;