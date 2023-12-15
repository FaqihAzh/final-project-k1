import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const IsLoginProtected = ({ children }) => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.authUser);

  useEffect(() => {
    if (data.token !== undefined || data.token === "") {
      navigate("/");
    }
  }, [data]);

  return children;
};

export const IsLogOutProtected = ({ children }) => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.authUser);

  useEffect(() => {
    if (data.token === undefined) {
      navigate("/login");
    }
  }, [data]);

  return children;
};
