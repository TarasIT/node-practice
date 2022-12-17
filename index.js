// // const { getCurrentDate } = require("./dateModule.js");
// const path = require("path");
// const fs = require("fs").promises;
// // import getCurrentDate from "./dateModule";
// console.log(path.resolve("dateModule.js"));

// (async () => {
//   try {
//     const data = await fs.readFile("./data.txt", "utf8");
//     const content = `${data} new world`;
//     await fs.writeFile("./data1.txt", content, "utf8");
//   } catch (error) {
//     console.log(error);
//   }
// })();
// const http = require("http");

// const PORT = 3030;

// const requestHandler = (request, response) => {
//   response.writeHead(200, { "Content-type": "text/json" });
//   response.end(JSON.stringify({ a: 1, b: 2 }));
// };

// const server = http.createServer(requestHandler);

// server.listen(PORT, (err) => {
//   if (err) {
//     console.error(`Something went wrong: ${err}`);
//   }
//   console.log(`Server starts at port:${PORT}`);
// });

const express = require("express");
const { nextTick } = require("process");
const app = express();

const PORT = 3031;

app.get("/home", (req, res) => {
  res.send("get request");
  next();
});

app.post("/home", (req, res) => {
  res.send("post request");
});

app.delete("/home", (req, res) => {
  res.send("delete request");
});

app.use("/home", (req, res) => {
  res.send("middleware request");
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Something went wrong: ${err}`);
  }
  console.log(`Server starts at port:${PORT}`);
});
