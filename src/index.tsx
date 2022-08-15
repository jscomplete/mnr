import { createRoot } from "react-dom/client";
import axios from "axios";

import App from "./components/app";
import { API_SERVER_URL } from "./public-config";

const container = document.getElementById("app");
const root = createRoot(container);

axios.get(`${API_SERVER_URL}/contests`).then((resp) => {
  root.render(
    <App initialData={{ contests: resp.data.contests }} />,
  );
});
