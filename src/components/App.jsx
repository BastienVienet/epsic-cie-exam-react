import "../styles/App.css"
import "bulma/css/bulma.min.css"
import {Header} from "./Header";
import {Planning} from "./Planning";

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Planning/>
        </div>
    );
}
