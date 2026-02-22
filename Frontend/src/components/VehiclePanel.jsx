import React from "react";

const VehiclePanel = (props) => {
  return (
    <div className="relative w-full">

      <div className="flex justify-center mb-2">
        <button
          onClick={() => props.setVehiclePanel(false)}
          className="text-2xl"
        >
          <i className="ri-arrow-down-wide-line"></i>
        </button>
      </div>

      <h3 className="text-xl font-semibold mb-5 text-left">
        Choose a vehicle
      </h3>

      <div className="flex rounded-xl border-2 border-black w-full mb-2 p-3 items-center justify-between">
        <img src="/images/UberCar.png" alt="Car" className="h-12" />
        <div onClick={()=>{
            props.setSelectedVehiclePanel(true)
        }} className="flex-1 ml-3">
          <h4 className="font-medium text-xl -mb-1">
            Uber Go <span><i className="ri-user-3-fill">4</i></span>
          </h4>
          <h5 className="font-medium text-sm">5 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Compact rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">
          <i className="ri-money-rupee-circle-line"></i>170
        </h2>
      </div>

      <div onClick={()=>{
            props.setSelectedVehiclePanel(true)
        }} className="flex rounded-xl border-2 border-black w-full mb-2 p-3 items-center justify-between">
        <img src="/images/UberAuto.png" alt="Auto" className="h-12" />
        <div className="flex-1 ml-3">
          <h4 className="font-medium text-xl -mb-1">
            Auto <span><i className="ri-user-3-fill">3</i></span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Compact rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">
          <i className="ri-money-rupee-circle-line"></i>70
        </h2>
      </div>

      <div onClick={()=>{
            props.setSelectedVehiclePanel(true)
        }} className="flex rounded-xl border-2 border-black w-full p-3 items-center justify-between">
        <img src="/images/UberBike.png" alt="Bike" className="h-12" />
        <div className="flex-1 ml-3">
          <h4 className="font-medium text-xl -mb-1">
            Bike <span><i className="ri-user-3-fill">2</i></span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Moto rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">
          <i className="ri-money-rupee-circle-line"></i>50
        </h2>
      </div>

    </div>
  );
};

export default VehiclePanel;