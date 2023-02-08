import "bulma/css/bulma.min.css";
import { useState } from "react";
import "../styles/App.css";
import { Header } from "./Header";
import { Login } from "./Login";
import { Planning } from "./Planning";

export const App = () => {

    const [userInfos, setUserInfos] = useState(null)

    return (
        <div>
            <Header/>
            {userInfos === null ? (
                <Login setUserInfos={setUserInfos}/>
             ) : (
                <Planning userInfos={userInfos}/>
             )}
        </div>
    );
}
