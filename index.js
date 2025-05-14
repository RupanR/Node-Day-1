import http from "http";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

//configure the dotenv package
dotenv.config();

// initialization of express
const app = express();

//express default middlewares
app.use(express.json()); // used to access the body content/payload from client

app.use(cors());

//create port to run the server

const port = process.env.PORT;

//Default route to avoid cannot get
app.get("/", (req, res) => {
  res
    .status(201)
    .send(`<h1 style="text-align:center;">Welcome to Backend 🎊</h1>`);
});

//creating a server using http & nodejs
/*
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"})
    res.write("Welcome to the backend")
    res.end();
}).listen(port,()=>{
    console.log(`server started and running on port ${port}`);
})
*/
app.listen(port, () => {
  console.log("server started");
});
