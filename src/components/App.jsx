import "bulma/css/bulma.min.css";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import { Header } from "./Header";
import { Login } from "./Login";
import { Planning } from "./Planning";
import { Portfolio } from "./Portfolio";

export const App = () => {
  const [userInfos, setUserInfos] = useState(
    JSON.parse(sessionStorage.getItem("userInfos"))
  );

  return (
    <div>
      <Header userInfos={userInfos} />
      <Routes>
        <Route
          path="/"
          element={
            userInfos ? (
              <Planning userInfos={userInfos} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/portfolio"
          element={userInfos ? <Portfolio /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login setUserInfos={setUserInfos} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
