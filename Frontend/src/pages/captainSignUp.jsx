import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../Context/CaptainContext";

const CaptainSignup = () => {
  const [fullname, setFullname] = useState({
    firstname: "",
    lastname: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicle, setVehicle] = useState({
    color: "",
    plate: "",
    capacity: "",
    type: "",
  });

  const [captain, setCaptain] = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
      email,
      password,
      vehicle: {
        colour: vehicle.color,
        plate: vehicle.plate,
        capacity: Number(vehicle.capacity),
        vehicleType: vehicle.type,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/register`,
        captainData,
      );

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);

        alert("Captain Registered Successfully!");
        navigate("/captain-login");
      }
    } catch (error) {
      console.log("Captain Signup Error:", error);
    }

    setFullname({ firstname: "", lastname: "" });
    setEmail("");
    setPassword("");
    setVehicle({ color: "", plate: "", capacity: "", type: "" });
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col justify-between px-6 pt-6">
      <div>
        <img
          className="w-24 h-20  object-cover"
          src="https://staging.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber"
        />
        <form
          onSubmit={submitHandler}
          className="w-full max-w-sm flex flex-col"
        >
          <h3 className="text-xl mb-2 font-medium">What's your name</h3>

          <div className="flex gap-4 mb-5">
            <input
              required
              type="text"
              placeholder="First name"
              value={fullname.firstname}
              onChange={(e) =>
                setFullname({ ...fullname, firstname: e.target.value })
              }
              className="bg-[#eeeeee] rounded px-3 py-3 border w-1/2 text-lg outline-none"
            />

            <input
              type="text"
              placeholder="Last name"
              value={fullname.lastname}
              onChange={(e) =>
                setFullname({ ...fullname, lastname: e.target.value })
              }
              className="bg-[#eeeeee] rounded px-3 py-3 border w-1/2 text-lg outline-none"
            />
          </div>

          <h3 className="text-xl mb-2 font-medium">What's your email</h3>

          <input
            required
            type="email"
            placeholder="captain@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-5 outline-none"
          />

          <h3 className="text-xl mb-2 font-medium">Enter Password</h3>

          <input
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-5 outline-none"
          />

          <h3 className="text-xl mb-2 font-medium">Vehicle Information</h3>

          <div className="flex gap-4 mb-4">
            <input
              required
              type="text"
              placeholder="Vehicle Color"
              value={vehicle.color}
              onChange={(e) =>
                setVehicle({ ...vehicle, color: e.target.value })
              }
              className="bg-[#eeeeee] rounded px-3 py-3 border w-1/2 text-lg outline-none"
            />

            <input
              required
              type="text"
              placeholder="Plate Number"
              value={vehicle.plate}
              onChange={(e) =>
                setVehicle({ ...vehicle, plate: e.target.value })
              }
              className="bg-[#eeeeee] rounded px-3 py-3 border w-1/2 text-lg outline-none"
            />
          </div>

          <div className="flex gap-4 mb-5">
            <input
              required
              type="number"
              placeholder="Capacity"
              value={vehicle.capacity}
              onChange={(e) =>
                setVehicle({ ...vehicle, capacity: e.target.value })
              }
              className="bg-[#eeeeee] rounded px-3 py-3 border w-1/2 text-lg outline-none"
            />

            <select
              required
              value={vehicle.type}
              onChange={(e) => setVehicle({ ...vehicle, type: e.target.value })}
              className="bg-[#eeeeee] rounded px-3 py-3 border w-1/2 text-lg outline-none"
            >
              <option value="" disabled>
                Select Vehicle
              </option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="auto">Auto</option>
              <option value="Jet">Jet</option>
              <option value="Helicopter">Helicopter</option>
              <option value="Ship">Ship</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-black text-white font-semibold rounded px-3 py-3 w-full mt-3 text-lg"
          >
            Sign Up as Captain
          </button>

          <p className="text-center font-medium py-4 text-base">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>

      <p className="text-xs mb-4 font-bold text-gray-500 mt-4 leading-tight">
        By proceeding, you consent to get emails, updates, and important
        notifications, including by automated means, from Uber and its
        affiliates to the email address provided.
      </p>
    </div>
  );
};

export default CaptainSignup;
