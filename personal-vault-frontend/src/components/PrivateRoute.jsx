// components/PrivateRoute.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:3002/api/auth/verify", {
          withCredentials: true, 
        });
        console.log("verify res from backend: ", res)
        if (res.status === 200) {
          setAuth(true);
        }
      } catch (err) {
        console.log("error in private route frontend",err)
        setAuth(false);
      }
    };
    checkAuth();
  }, []);

  if (auth === null) return <div className="text-white">Loading...</div>;
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
