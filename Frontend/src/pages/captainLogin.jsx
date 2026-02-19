import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    };
    setUserData(data);
    console.log(data);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col justify-between px-6 pt-6">

      <div>
        <img
          className="w-40 h-auto object-contain mb-2"
          src="/images/Uber-Captain-Logo.png"
          alt="Uber"/>

        <div className="w-full max-w-sm">
          <form onSubmit={(e) => submitHandler(e)} className="flex flex-col">
            <h3 className="text-xl mb-2 font-medium">
              What's your email
            </h3>

            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Captain@gmail.com"
              className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-4 outline-none"
            />

            <h3 className="text-xl mb-2 font-medium">
              Enter Password
            </h3>

            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-6 outline-none"
            />

            <button
              type="submit"
              className="bg-black text-white font-semibold rounded px-3 py-3 w-full text-lg"
            >
              Login
            </button>

            <p className="text-center font-semibold py-3 text-m">
              Join a Fleet?{" "}
              <Link to="/captain-signup" className="text-blue-500">
                Register Here
              </Link>
            </p>
          </form>
        </div>
      </div>

      <Link
        to="/login"
        className="flex items-center justify-center w-full bg-yellow-500 text-white py-3 rounded text-lg font-medium mb-6"
      >
        Sign in as User
      </Link>

    </div>
  );
};

export default CaptainLogin;
