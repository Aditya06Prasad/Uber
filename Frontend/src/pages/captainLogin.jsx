import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../Context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [captain, setCaptain] = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const loginCaptain = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/login`,
        loginCaptain,
      );

      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        navigate("/");
      }
    } catch (error) {
      console.log("Login Error:", error);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col px-6 pt-3">
      <img
        className="w-24 h-20  object-cover"
        src="https://staging.svgrepo.com/show/505031/uber-driver.svg"
        alt="Uber"
      />

      <div className="w-full mt-3">
        <form onSubmit={(e) => submitHandler(e)} className="flex flex-col">
          <h3 className="text-xl mb-2 font-medium">What's your email</h3>

          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Captain@gmail.com"
            className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-4 outline-none"
          />

          <h3 className="text-xl mb-2 font-medium">Enter Password</h3>

          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-6 outline-none"
          />

          <Link to='/captain-home'
            type="submit"
            className="bg-black text-white font-semibold rounded px-32 py-3 w-full text-lg">Login
          </Link>

          <p className="text-center font-semibold py-3 text-m">
            Join a Fleet?{" "}
            <Link to="/captain-signup" className="text-blue-500">
              Register Here
            </Link>
          </p>
        </form>
      </div>

      <Link
        to="/login"
        className="flex items-center justify-center w-full bg-yellow-400 mt-42 text-white py-3 rounded text-lg font-medium"
      >
        Sign in as User
      </Link>
    </div>
  );
};

export default CaptainLogin;
