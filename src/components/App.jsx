import "../styles/App.css"
import "bulma/css/bulma.min.css"
import {Header} from "./Header";
// import {Planning} from "./Planning";
import {Login} from "./Login";

export const App = () => {
    return (
        <div>
            <Header/>
            <Login/>
            {/*<Planning/>*/}
        </div>
    );
}
