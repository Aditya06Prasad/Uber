import React from "react";

const SelectedVehiclePanel = ({
  setSelectedVehiclePanel,
  setShowVehicleFound,
}) => {
  return (
    <div className="relative w-full px-4 pb-6">
      <div className="flex justify-end mb-3">
        {" "}
        <button
          onClick={() => setSelectedVehiclePanel(false)}
          className="text-2xl text-gray-500"
        >
          <i className="ri-skip-left-line right-2"></i>
        </button>
      </div>

      <h3 className="text-2xl font-semibold mb-6">Confirm your Ride</h3>

      <div className="flex justify-center mb-6">
        <img src="/images/UberCar.png" alt="Car" className="h-20" />
      </div>

      <div className="flex items-center gap-3 py-3 border-b">
        <i className="text-2xl ri-map-pin-user-line"></i>
        <div>
          <h4 className="font-medium text-base">562/11-A</h4>
          <p className="text-sm text-gray-500">Kankariya Talab, Bhopal</p>
        </div>
      </div>

      <div className="flex items-center gap-3 py-3 border-b">
        <i className=" text-2xl ri-map-pin-fill"></i>
        <div>
          <h4 className="font-medium text-base">562/11-A</h4>
          <p className="text-sm text-gray-500">LNCT College, Bhopal</p>
        </div>
      </div>

      <div className="flex items-center gap-3 py-3">
        <i className=" text-2xl ri-cash-line"></i>
        <div>
          <h4 className="font-medium text-base">₹193.20</h4>
          <p className="text-sm text-gray-500">Cash Cash</p>
        </div>
      </div>

      <button
        onClick={() => {
          setSelectedVehiclePanel(false);
          setShowVehicleFound(true);
        }}
        className="w-full bg-green-600 text-white py-3 rounded-lg mt-6 font-medium"
      >
        Confirm
      </button>
    </div>
  );
};

export default SelectedVehiclePanel;
