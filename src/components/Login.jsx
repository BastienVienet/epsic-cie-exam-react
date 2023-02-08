import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Login = ({ setUserInfos }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        if (!username) {
            alert("The user field can't be null");
            return;
        }
        if (!password || password.length < 3) {
            alert("The password can't be null and must contain minimum 3 characters");
            return;
        }
        setUserInfos('userInfo: ' + username + ' ' + password)
    }

    return (
        <>
            <div className="m-6">
                <h1 className="title is-spaced has-text-weight-normal">Login</h1>
                <h2 className="subtitle has-text-weight-bold mt-4 mb-0">User</h2>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="Username" value={username}
                               onChange={e => setUsername(e.target.value)}/>
                        <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </span>
                        <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                    </p>
                </div>
                <h2 className="subtitle has-text-weight-bold mt-4 mb-0">Password</h2>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password" value={password}
                               onChange={e => setPassword(e.target.value)}/>
                        <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faLock}/>
                    </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <button className="button is-link" onClick={handleLogin}>
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
}