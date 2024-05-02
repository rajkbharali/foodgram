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

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems);
  const loggedIn = useSelector((state) => state.authenticate.loggedIn);
  const dispatch = useDispatch();
  const checkOnlineStatus = useOnlineChecker();

  const handleLogin = () => {
    dispatch(logIn());
  };

  return (
    <div className="flex justify-between m-2 px-24 py-0 shadow-[0_5px_42px_-13px_rgba(0,0,0,0.44)] bg-white">
      <div className="m-2.5 flex flex-col justify-center">
        <Link to="/">
          <img className="h-12 cursor-pointer" src={LOGO_URL} />
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
          <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
            <Link className="flex items-center" to="/help">
              <CgPokemon className="mx-1" />
              Help
            </Link>
          </li>
          <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
            <Link className="flex items-center" to="/contact">
              <CgPokemon className="mx-1" />
              Contact
            </Link>
          </li>
          {/* <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
            <IoPersonSharp className="mx-1" />
            Sign In
          </li>
          <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
            <Link className="flex items-center" to="/cart">
              <IoBagOutline className="mx-1" />
              Cart ({cartItems.length})
            </Link>
          </li>
          <li className="flex items-center px-3 py-5 list-none text-gray-600 text-lg cursor-pointer">
            <button onClick={handleLogin}>
              {loggedIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
