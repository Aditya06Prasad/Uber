import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/vehiclePanel";
import SelectedVehiclePanel from "../components/SelectedVehiclePanel";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const [panel, setPanel] = useState(false);
  const [showVehiclePanel, setShowVehiclePanel] = useState(false);
  const [showSelectedVehiclePanel, setShowSelectedVehiclePanel] =
    useState(false);
  const [showVehicleFound, setShowVehicleFound] = useState(false);
  const [showWaitingForDriver, setShowWaitingForDriver] = useState(false);

  const containerRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const selectedVehiclePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      height: panel ? "100%" : "30%",
      duration: 0.3,
      ease: "power3.out",
    });
  }, [panel]);

  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      y: showVehiclePanel ? "0%" : "100%",
      duration: 0.3,
      ease: "power3.out",
    });
  }, [showVehiclePanel]);

  useGSAP(() => {
    gsap.to(selectedVehiclePanelRef.current, {
      y: showSelectedVehiclePanel ? "0%" : "100%",
      duration: 0.3,
      ease: "power3.out",
    });
  }, [showSelectedVehiclePanel]);

  useGSAP(() => {
    gsap.to(vehicleFoundRef.current, {
      y: showVehicleFound ? "0%" : "100%",
      duration: 0.3,
      ease: "power3.out",
    });
  }, [showVehicleFound]);

  useGSAP(() => {
    gsap.to(waitingForDriverRef.current, {
      y: showWaitingForDriver ? "0%" : "100%",
      duration: 0.3,
      ease: "power3.out",
    });
  }, [showWaitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/GoogleMap.jpg"
        alt="Map"
      />

      {!panel && (
        <img
          className="absolute top-6 left-6 w-20 z-50"
          src="/images/Uber-Transparent-Background.png"
          alt="Uber"
        />
      )}

      <div
        ref={containerRef}
        className={`absolute bottom-0 left-0 w-full h-[30%] bg-white shadow-2xl flex flex-col z-10 ${
          panel ? "rounded-none" : "rounded-t-3xl"
        }`}
      >
        {!panel && (
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mt-3 mb-2"></div>
        )}

        {panel && (
          <button
            onClick={() => setPanel(false)}
            className="absolute top-4 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </button>
        )}

        <div className="px-5 pt-6 pb-4">
          <h4 className="text-2xl font-semibold mb-3">Find a trip</h4>

          <input
            onFocus={() => setPanel(true)}
            className="bg-[#eee] px-4 py-2 text-lg rounded-lg w-full mb-3"
            placeholder="Add a pickup location"
          />

          <input
            onFocus={() => setPanel(true)}
            className="bg-[#eee] px-4 py-2 text-lg rounded-lg w-full"
            placeholder="Enter Your Drop Location"
          />
        </div>

        {panel && (
          <LocationSearchPanel
            setPanel={setPanel}
            setVehiclePanel={setShowVehiclePanel}
          />
        )}
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed bottom-0 w-full bg-white px-3 py-6 z-20 translate-y-full"
      >
        <VehiclePanel
          setVehiclePanel={setShowVehiclePanel}
          setSelectedVehiclePanel={setShowSelectedVehiclePanel}
        />
      </div>

      <div
        ref={selectedVehiclePanelRef}
        className="fixed bottom-0 w-full bg-white px-3 py-6 z-30 translate-y-full"
      >
        <SelectedVehiclePanel
          setSelectedVehiclePanel={setShowSelectedVehiclePanel}
          setShowVehicleFound={setShowVehicleFound}
        />
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed bottom-0 w-full bg-white px-3 py-6 z-40 translate-y-full"
      >
        <LookingForDriver
          setShowVehicleFound={setShowVehicleFound}
          setShowWaitingForDriver={setShowWaitingForDriver}
        />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed bottom-0 w-full bg-white px-3 py-6 z-50 translate-y-full"
      >
        <WaitingForDriver setShowWaitingForDriver={setShowWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
