import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setLoginOpen } from "../utils/modalSlice";

const LoginSignUpModal = () => {
  const [switchForm, setSwitchForm] = useState(false);
  const dispatch = useDispatch();

  const handleCrossButton = () => {
    dispatch(setLoginOpen());
  };
  const handleFormChange = () => {
    setSwitchForm(!switchForm);
  };

  return (
    <div className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-start pt-16 z-50">
      <div className="bg-white rounded-lg shadow-md p-6 w-[30%]">
        <div>
          <RxCross1
            className="text-2xl font-semibold cursor-pointer"
            onClick={handleCrossButton}
          />
        </div>
        <div className="flex justify-between my-5">
          <div>
            <h1 className="my-3 text-3xl font-semibold">
              {switchForm ? "Sign up" : "Login"}
            </h1>
            <h2 className="text-gray-500 text-xl">
              or
              <span
                className="text-red-600 cursor-pointer ml-1"
                onClick={handleFormChange}
              >
                create an account
              </span>
            </h2>
          </div>
          <div>
            <img
              className="w-36"
              alt="login"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <input
            className="border-2 border-gray-500 mt-2 py-3 pl-5 pr-[136px] rounded"
            type="text"
            placeholder="Phone Number"
          />
          {switchForm ? (
            <>
              <input
                className="border-2 border-gray-500 mt-2 py-3 pl-5 pr-[136px] rounded"
                type="text"
                placeholder="Name"
              />
              <input
                className="border-2 border-gray-500 mt-2 py-3 pl-5 pr-[136px] rounded"
                type="text"
                placeholder="Email"
              />
            </>
          ) : (
            ""
          )}
          <button className="text-white font-semibold bg-black my-5 py-3 px-36 text-lg rounded">
            {switchForm ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpModal;
