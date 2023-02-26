import "bulma/css/bulma.min.css"
import { useState } from "react"
import "../styles/App.css"
import { Portfolio } from "./Portfolio"
import { Header } from "./Header"
import { Login } from "./Login"
import { Planning } from "./Planning"
import { Routes, Route, Navigate } from "react-router-dom"

export const App = () => {
    const [userInfos, setUserInfos] = useState(JSON.parse(sessionStorage.getItem('userInfos')))

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
                    element={
                        userInfos ? (
                            <Portfolio />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route path="/login" element={<Login setUserInfos={setUserInfos} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}
