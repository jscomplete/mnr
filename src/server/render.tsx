import ReactDOMServer from "react-dom/server";

import { fetchContestList } from "../api-client";

import App from "../components/app";

const serverRender = async () => {
  const contests = await fetchContestList();

  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={{ contests }} />,
  );

  return { initialMarkup, initialData: { contests } };
};

export default serverRender;
