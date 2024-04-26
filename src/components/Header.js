import { Link } from "react-router-dom";
import useOnlineChecker from "../utils/useOnlineChecker";

import { IoBagOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { CgPokemon } from "react-icons/cg";
import { BiSolidOffer } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
    const checkOnlineStatus = useOnlineChecker()

    return (
        <div className="flex justify-between m-2 px-24 py-0 shadow-[0_5px_42px_-13px_rgba(0,0,0,0.44)]">
            <div className="m-2.5 flex flex-col justify-center">
                <Link to="/">
                    <img className="h-12 cursor-pointer" src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png"/>
                </Link>
            </div>
            <div>
                <ul className="flex items-center m-0  hover:*:text-orange-500">
                    <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">{checkOnlineStatus ? "Online" : "Offline"}</li>
                    <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
                        <IoSearchSharp className="mx-1"/>
                        <p>Search</p>
                    </li>
                    <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
                        <BiSolidOffer className="mx-1"/>
                         Offers
                        </li>
                    <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
                        <Link className="flex items-center" to="/help">
                            <CgPokemon className="mx-1"/> 
                            Help
                        </Link>
                    </li>
                    <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
                        <IoPersonSharp className="mx-1"/>
                        Sign In
                    </li>
                    <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
                        <Link to="/grocery">
                            Grocery
                        </Link>
                    </li>
                    <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
                        <IoBagOutline className="mx-1"/>
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header