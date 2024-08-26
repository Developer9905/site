import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai'; // Import the X icon
import classes from './style.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        {
            name: "Ana Səhifə",
            path: "/"
        },
        {
            name: "Haqqımızda",
            path: "/about"
        },
        {
            name: "Əlaqə",
            path: "/contact"
        },
        {
            name: "Məşhurlar",
            path: "/stars"
        },
        {
            name: "Ödənişlər",
            path: "/payment"
        }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full h-[90px] bg-black flex justify-center items-center fixed top-0 left-0 z-50">
            <div className="container w-[95%] mx-auto flex justify-between items-center">
                <div className="logo flex items-center">
                    <div className="imgbox w-[120px] sm:w-[140px] h-[70px] sm:h-[90px]">
                        <img style={{ width: "100%", height: "100%" }} src="/public/e12-01.png" alt="Logo" />
                    </div>
                    <h1 style={{ fontFamily: 'Edu AU VIC WA NT Hand' }} className={classes.animate_charcterLogo}>Live Casino</h1>
                </div>
                <div className="hidden lg:block">
                    <ul className="flex gap-x-10">
                        {links.map((link) => (
                            <li key={link.path}>
                                <Link className={classes.animate_charcter} to={link.path}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hamburger text-3xl text-white block lg:hidden">
                    <GiHamburgerMenu onClick={toggleMenu} />
                </div>
            </div>
            {/* Full-Screen Mobile Menu */}
            <div className={`fixed top-0 left-0 h-full w-full bg-black text-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-1000 lg:hidden`}>
                <div className="flex justify-end p-4">
                    <AiOutlineClose className="text-4xl mt-2" onClick={toggleMenu} /> {/* X icon for closing */}
                </div>
                <div className="flex items-center justify-center ">
                    <ul className="flex flex-col gap-y-5 items-center">
                        {links.map((link) => (
                            <li key={link.path} className="py-2 font ">
                                <Link className={classes.animate_charcter} to={link.path} onClick={() => setIsMenuOpen(false)}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
