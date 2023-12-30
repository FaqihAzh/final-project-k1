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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return children;
};
