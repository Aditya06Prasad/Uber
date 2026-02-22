import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../Context/UserContext";

const UserLogout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  useEffect(() => {
    localStorage.removeItem("userToken");
    setUser(null);
    navigate("/login");
  }, [navigate, setUser]);

  return null;
};

export default UserLogout;
