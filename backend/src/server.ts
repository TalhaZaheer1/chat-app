
import express from "express";
import type { Request,Response } from "express-serve-static-core";
import expressWs, { Application, WebsocketRequestHandler } from "express-ws";
import WebSocket from "ws";
const expressApp = express();
const {app} = expressWs(expressApp);


app.get("/",(req:Request,res:Response) => {
  res.send("Home");
})
app.ws("/echo",(ws:WebSocket,req:Request) => {
 ws.on("message",(msg:string) => {
    ws.send(msg)
  }) 
})


app.listen(3000,() => {
  console.log("Server listening on 3000");
})
