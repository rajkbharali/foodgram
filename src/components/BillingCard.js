import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoginOpen } from "../utils/modalSlice";

const BillingCard = ({ data }) => {
  const [totalCost, setTotalCost] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const itemsTotalCost = Object.values(data)
      .map((x) =>
        x.card.info.price
          ? x.card.info.price * x.quantity
          : x.card.info.defaultPrice * x.quantity
      )
      .reduce((acc, curr) => curr + acc, 0);
    setTotalCost(itemsTotalCost / 100);
  }, [data]);

  const handlePayment = () => {
    dispatch(setLoginOpen());
  };

  return (
    <div className="m-2 p-4 bg-slate-100 rounded-md w-[50%] h-fit text-sm">
      <h1 className="font-semibold text-lg">Bill Details</h1>
      <div className="flex justify-between items-center py-2 text-gray-500">
        <p>Items Total</p>
        <p>₹ {totalCost}</p>
      </div>
      <div className="flex justify-between items-center py-2 text-gray-500">
        <p>Delivery Fee | 0.7 kms</p>
        <p>₹ 37</p>
      </div>
      <hr className="bg-black" />
      <div className="flex justify-between items-center py-2 text-gray-500">
        <p>Delivery Tip</p>
        <p className="text-black cursor-pointer">Add Tip</p>
      </div>
      <div className="flex justify-between items-center py-2 text-gray-500">
        <p>Platform Fee</p>
        <p>₹ 5</p>
      </div>
      <div className="flex justify-between items-center py-2 text-gray-500">
        <p>GST and Restaurant Charges</p>
        <p>₹ {((totalCost * 5) / 100).toFixed(2)}</p>
      </div>
      <hr className="border-black border-t-[3px]" />
      <div className="flex justify-between items-center py-2 text-black text-sm font-semibold">
        <p>Total Payment</p>
        <p>
          ₹ {parseFloat(totalCost + (totalCost * 5) / 100 + 37 + 5).toFixed(2)}
        </p>
      </div>
      <div className="flex justify-center">
        <button
          className="text-white font-semibold bg-black my-5 py-2 px-7 text-lg rounded"
          onClick={handlePayment}
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default BillingCard;
