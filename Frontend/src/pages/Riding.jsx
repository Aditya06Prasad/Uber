import React from "react";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Riding = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen relative overflow-hidden">
      <div
        onClick={() => navigate("/home")}
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full cursor-pointer z-50"
      >
        <i className="text-lg font-medium ri-home-4-fill"></i>
      </div>
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/GoogleMap.jpg"
        alt="Map"
      />

      <img
        className="absolute top-6 left-6 w-20 z-40"
        src="/images/Uber-Transparent-Background.png"
        alt="Uber"
      />
      <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-2xl px-5 pt-4 pb-6 z-50">
        <div className="flex justify-center mb-3">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        <div className="flex items-center justify-between py-4 border-b">
          <h2 className="text-lg font-semibold">Meet at the pickup point</h2>

          <div className="bg-black text-white w-14 h-14 flex flex-col items-center justify-center rounded-lg">
            <span className="text-lg font-bold leading-none">2</span>
            <span className="text-xs leading-none">min</span>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 border-b">
          <div className="flex items-center gap-3">
            <img
              src="/images/UberDriver.jpeg"
              alt="Driver"
              className="w-14 h-14 rounded-full object-cover"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/car.png"
              alt="Car"
              className="h-10"
            />
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">Alok Uber</p>
            <h3 className="text-2xl font-bold tracking-wide">BR0-7676</h3>
            <p className="text-gray-600 text-sm">
              White Suzuki S-Presso LXI ★ 4.9
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 py-4 border-b">
          <i className="ri-map-pin-user-line text-xl mt-1"></i>
          <div>
            <h4 className="font-semibold text-base">562/11-A</h4>
            <p className="text-gray-600 text-sm">
              Kaikondrahalli, Bengaluru, Karnataka
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 py-4 border-b">
          <i className="ri-cash-line text-xl mt-1"></i>
          <div>
            <h4 className="font-semibold text-base">₹193.20</h4>
            <p className="text-gray-600 text-sm">Cash</p>
          </div>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-xl mt-6 font-medium">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
