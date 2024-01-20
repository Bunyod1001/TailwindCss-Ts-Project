
import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navigationLinks } from "../util/constant";
import { styles } from "../util/style";

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState<boolean>(false)
    const [active, setActive] = useState<string>('home');
    const activeHandler = (id: string) => setActive(id);

    const toggleHandler = () => setToggleNav(prev => !prev)

    return ( 
    <div className={`w-full py-6 ${styles.flexBetween}`}>
    {/* Logo */}
    <a href="/">
    <img src={logo} alt="logo" className="w-[80px] h-[80px] cursor-pointer rounded-[30px]"/>
    </a>
    {/* navigation link */ }
    <ul className="list-none sm:flex hidden justify-end items-center flex-1">{navigationLinks.map((nav, idx) => (
            <li key={nav.id} className={`font-montserrat font-normal cursor-pointer text-[16px]
            ${idx === navigationLinks.length -1 ? "mr-0": "mr-10"} 
             ${active === nav.id ? "text-white" : "text-lightWhite"} 
              hover:text-white transition-all duration-500`} 
               onClick={() => activeHandler(nav.id)}
              ><a href={`#${nav.id}`}>{nav.title}</a></li>
    ))}
    </ul>
    {/* Navigation btn  */}

    <div className={"sm:hidden w-[50px] h-[10px] flex flex-1 justify-end items-center "}>
        <img src={toggleNav ? close : menu} alt="nav" className="w-[30px] h-[30px] object-contain" onClick={toggleHandler}/>

        <div className={`${!toggleNav ? "hidden": "flex"} p-6 bg-black-gradient absolute top-20 right-0 left-0  w-full sidebar mt-10 z-[99]`}>
        <ul className="list-none flex  justify-center items-center flex-1">{navigationLinks.map((nav, idx) => (
            <li key={nav.id} className={`font-montserrat font-normal cursor-pointer text-[16px]
            ${idx === navigationLinks.length -1 ? "mr-0": "mr-10"} 
             ${active === nav.id ? "text-white" : "text-lightWhite"} 
              hover:text-white transition-all duration-500`} 
               onClick={() => activeHandler(nav.id)}
              ><a href={`#${nav.id}`}>{nav.title}</a></li>
    ))}
    </ul>
        </div>
    </div>
    </div>
    );
};
 
export default Navbar;