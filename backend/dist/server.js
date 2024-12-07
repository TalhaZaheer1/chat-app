import express from "express";
import expressWs from "express-ws";
const expressApp = express();
const { app } = expressWs(expressApp);
app.get("/", (req, res) => {
    res.send("Home");
});
app.ws("/echo", (ws, req) => {
    ws.on("message", (msg) => {
        ws.send(msg);
    });
});
app.listen(3000, () => {
    console.log("Server listening on 3000");
});
