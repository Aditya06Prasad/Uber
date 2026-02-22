import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../Context/CaptainContext";

const CaptainLogout = () => {
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);

  useEffect(() => {
    localStorage.removeItem("captainToken");
    setUser(null);
    navigate("/captain-login");
  }, [navigate, setCaptain]);

  return null;
};

export default CaptainLogout;