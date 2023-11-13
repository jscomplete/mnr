import {createRoot} from "react-dom/client"

const App = () => {
    return(
        <div>
            Hrllo World
        </div>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);