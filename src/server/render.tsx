import ReactDomServer from "react-dom/server";

import { fetchContests, fetchSingleContests } from "../api-client";

import App from "../components/App"

const ServerRender = async (req) => {
    const { contestId } = req.params;

    const initialData = contestId
    ? {currentContest: await fetchSingleContests(contestId)}
    : {contests: await fetchContests() }
    const initialMarkup = ReactDomServer.renderToString(<App initialData = {initialData}/>)

    return {initialMarkup, initialData}
} 
export default ServerRender;
