import { useState } from "react";
import { Link } from "react-router-dom";

// Importing Icons
import { MdMenu } from "react-icons/md";

const Navbar = () => {

    const [toggleNavigation, setToggleNavigation] = useState(false);

    const toggle = () => {
        setToggleNavigation(!toggleNavigation);
    };

    return (
        <nav className={`sticky w-full flex justify-center ${toggleNavigation && 'bg-lightSecondary'} md:bg-white relative mt-2 md:mt-0`}>
            <div className={`md:hidden inline ${toggleNavigation && 'hidden'}`}>
                <Link to="/"><img src="/logo.png" alt="logo" style={{height: "65px", width: "100%"}} /></Link>
            </div>
            <div className="md:hidden absolute right-2">
                <MdMenu
                onClick={toggle}
                className="self-end my-5 text-3xl mr-4 cursor-pointer border-2 border-primary bg-primary text-white hover:text-primary rounded transition hover:bg-white"
                />
            </div>
            
            <div className={`justify-between items-center py-6 lg:w-3/4 ${!toggleNavigation && 'hidden'} md:hidden`}>
                <div>
                    <ul className="">
                        <li className="navLinks transitionItem"><Link to="/">homepage</Link></li>
                        <li className="navLinks transitionItem"><Link to="/programmes">programmes</Link></li>
                        <li className="navLinks transitionItem"><Link to="/messages">messages</Link></li>
                        <li className="navLinks transitionItem"><Link to="/writeups">write-ups</Link></li>
                        <li className="navLinks transitionItem"><Link to="/about">about</Link></li>
                        <li className="navLinks transitionItem"><Link to="#">contact us</Link></li>
                    </ul>
                </div>
                
            </div>

            <div className={`md:flex justify-between items-center py-6 lg:w-3/4 hidden`}>
                <div>
                    <ul className="md:flex">
                        <li className="navLinks transitionItem"><Link to="#">contact us</Link></li>
                        <li className="navLinks transitionItem"><Link to="/about">about</Link></li>
                        <li className="navLinks transitionItem"><Link to="/">homepage</Link></li>
                    </ul>
                </div>
                <div className="">
                    <Link to="/"><img src="/logo.png" alt="logo" style={{height: "65px", width: "100%"}} /></Link>
                </div>
                <div>
                    <ul className="md:flex">
                        <li className="navLinks transitionItem"><Link to="/programmes">programmes</Link></li>
                        <li className="navLinks transitionItem"><Link to="/messages">messages</Link></li>
                        <li className="navLinks transitionItem"><Link to="/writeups">write-ups</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;