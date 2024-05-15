import React from "react";

const LoginSignUpModal = () => {
  return (
    <div className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-md p-8 w-[40%]">
        <h1 className="text-2xl font-semibold">Login</h1>
      </div>
    </div>
  );
};

export default LoginSignUpModal;
