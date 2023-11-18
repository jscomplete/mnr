import express from "express";
import os from "node:os"
import config from "./config";
import apiRouter from "./ap-router";
import ServerRender from "./render";

const server = express();
server.use(express.static("dist"));
server.use("/api",apiRouter)

server.set("view engine", "ejs");

server.get(["/", "/contest/:contestId"], async (req, res) => {
    const { initialMarkup, initialData } = await ServerRender(req)
    res.render("index", {
        initialMarkup,
        initialData
    });
});

server.listen(config.PORT, () => {
    console.info(
        `Express server is listening at ${config.SERVER_URL}`,
        `Free Mem: ${os.freemem()/1024/1024}`
    );
});

// console.log(express);