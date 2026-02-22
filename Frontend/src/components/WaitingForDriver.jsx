import React from "react";

const WaitingForDriver = ({ setShowWaitingForDriver }) => {
  return (
    <div className="relative w-full bg-white">

      <div className="flex justify-center py-2">
        <button
          onClick={() => setShowWaitingForDriver(false)}
          className="text-2xl text-gray-500"
        >
          <i className="ri-arrow-down-wide-line"></i>
        </button>
      </div>

      <div className="flex items-center justify-between px-5 py-4 border-b">
        <h2 className="text-xl font-semibold">
          Meet at the pickup point
        </h2>

        <div className="bg-black text-white px-4 py-2 text-center rounded-md">
          <p className="text-lg font-semibold leading-none">2</p>
          <p className="text-xs leading-none">min</p>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-4 border-b">

        <div className="flex items-center gap-3">
          <img
            src="/images/UberDriver.jpg"
            alt="Driver"
            className="w-14 h-14 rounded-full object-cover"
          />

          <img
            src="/images/UberCar.png"
            alt="Car"
            className="h-10"
          />
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-500">SANTH</p>
          <h3 className="text-2xl font-bold">KA15AK00-0</h3>
          <p className="text-gray-600 text-sm">
            White Suzuki S-Presso LXI
          </p>
          <div className="flex items-center justify-end gap-1 mt-1">
            <i className="ri-star-fill text-black"></i>
            <span className="text-sm">4.9</span>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3 px-5 py-4">
        <i className="ri-map-pin2-fill text-lg"></i>
        <div>
          <h4 className="font-semibold text-lg">562/11-A</h4>
          <p className="text-gray-600 text-sm">
            Kaikondrahalli, Bengaluru, Karnataka
          </p>
        </div>
      </div>

    </div>
  );
};

export default WaitingForDriver;