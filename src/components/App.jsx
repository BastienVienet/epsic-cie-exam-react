import "bulma/css/bulma.min.css";
import { useState } from "react";
import "../styles/App.css";
import { Header } from "./Header";
import { Login } from "./Login";
import { Planning } from "./Planning";

export const App = () => {

    // Either it's null or it's the userInfos that we get from the sessionStorage.
    const [userInfos, setUserInfos] = useState(JSON.parse(sessionStorage.getItem('userInfos')))

    return (
        <div>
            <Header/>
            { userInfos ? (
                // If userInfos is not null, we display the planning, meaning that the user is logged in.
                <Planning userInfos={userInfos}/>
            ) : (
                // If userInfos is null, we display the login page.
                <Login setUserInfos={setUserInfos}/>
                )}
        </div>
    );
}
