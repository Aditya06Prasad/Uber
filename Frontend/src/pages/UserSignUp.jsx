import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../Context/UserContext";

const UserSignup = () => {
  const [fullname, setFullname] = useState({
    firstname: "",
    lastname: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user); 

        alert("User Registered Successfully! You can now Login"); 
        navigate("/login"); 
      }
    } catch (error) {
      console.log("Signup Error:", error);
    }

    setFullname({ firstname: "", lastname: "" });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col justify-between px-6 pt-6">
      <div>
        <img
          className="w-20 mb-2"
          src="/images/Uber-Transparent-Background.png"
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
            placeholder="email@example.com"
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
            className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-6 outline-none"
          />

          <button
            type="submit"
            className="bg-black text-white font-semibold rounded px-3 py-3 w-full text-lg"
          >
            Sign Up
          </button>

          <p className="text-center font-medium py-4 text-base">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>

      <p className="text-[11px] text-gray-500 mt-1 mb-5 leading-tight">
        By proceeding, you consent to receive emails, calls, WhatsApp or SMS
        messages, including by automated means, from Uber and its affiliates
        regarding your captain account and services.
      </p>
    </div>
  );
};

export default UserSignup;
