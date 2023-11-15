import ReactDomServer from "react-dom/server";

import { fetchContests } from "../api-client";

import App from "../components/App"

const ServerRender = async () => {
    const contests = await fetchContests()

    const initialMarkup = ReactDomServer.renderToString(<App initialData = {{ contests}}/>)

    return {initialMarkup, initialData: {contests}}
} 
export default ServerRender;
