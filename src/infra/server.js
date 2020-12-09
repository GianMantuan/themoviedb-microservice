const app = require("../../app.js");
const http = require("http");
const debug = require("debug");

require("./database");

const port = process.env.PORT;

app.set("port", port);

const server = http.createServer(app);
server.listen(port);
server.on("listening", onListening);

function onListening() {
  const addr = server.address();
  debug(`Listening on port ${addr.port}`);
}
