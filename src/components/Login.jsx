import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';
import { useState } from "react";

export const Login = ({setUserInfos}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        if (!username) {
            alert("The user field can't be null");
            return;
        }
        if (!password || password.length < 3) {
            alert("The password can't be null and must contain minimum 3 characters");
            return;
        }

        const response = await fetch('http://15.188.53.208:8080/utgCheckLogin',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({ username: username, password: password })       
        })

        const answer = await response.json()
        if (answer.num_personne) {
            setUserInfos(answer)
        } else {
            alert('Compte inexistant !')
        }

        // We store the userInfos in the sessionStorage after the request.
        sessionStorage.setItem('userInfos', JSON.stringify(answer))
    }

    return (<>
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
        </>);
}

Login.propTypes = {
    setUserInfos: PropTypes.func.isRequired
}