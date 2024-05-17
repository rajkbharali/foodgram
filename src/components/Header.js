import { Link } from "react-router-dom";
import useOnlineChecker from "../utils/useOnlineChecker";
import { LOGO_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../utils/authenticateSlice";

import { IoBagOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { CgPokemon } from "react-icons/cg";
import { BiSolidOffer } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { setLoginOpen } from "../utils/modalSlice";
import LoginSignUpModal from "./LoginSignUpModal";

const Header = () => {
  const isLoginForm = useSelector((state) => state.modal.loginModel);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const checkOnlineStatus = useOnlineChecker();

  const handleLogin = () => {
    dispatch(setLoginOpen());
  };

  return (
    <>
      <div className="flex justify-between m-2 px-24 py-0 shadow-lg bg-white rounded-sm">
        <div className="m-2.5 flex flex-col justify-center">
          <Link className="flex items-center" to="/">
            <>
              <img className="h-12 cursor-pointer" src={LOGO_URL} />
              <h1 className="font-dancing font-semibold text-2xl pl-2">
                Foodgram
              </h1>
            </>
          </Link>
        </div>
        <div>
          <ul className="flex items-center m-0">
            {/* <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
            {checkOnlineStatus ? "Online" : "Offline"}
          </li> */}
            {/* <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
            <BiSolidOffer className="mx-1" />
            Offers
          </li> */}
            {/* <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
            <Link className="flex items-center" to="/help">
              <CgPokemon className="mx-1" />
              Help
            </Link>
          </li> */}
            <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
              <Link className="flex items-center" to="/contact">
                <CgPokemon className="mx-1" />
                Contact
              </Link>
            </li>
            {/* <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li> */}
            <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
              <Link className="flex items-center" to="/cart">
                <IoBagOutline className="mx-1" />
                Cart
                <span className="text-black font-semibold">
                  ({Object.keys(cartItems).length})
                </span>
              </Link>
            </li>
            <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
              <button className="flex items-center" onClick={handleLogin}>
                <IoPersonSharp className="mx-1" />
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
      {isLoginForm ? <LoginSignUpModal /> : ""}
    </>
  );
};

export default Header;
