import express from "express";
import bodyParser from "body-parser";

const server = express();

server.use(bodyParser.text());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));


const PORT = 5000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});