import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className="container" title="Hello React">
      <h1>Hello React</h1>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
