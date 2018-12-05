const handlers = require("./handlers.js");

const routes = [
"/css/main.css",
"/css/reset.css",
"/js/request.js",
"/js/app.js",
];

const router = (req, res) => {
const url = req.url;

// console.log(url);
if (url === "/") {
  handlers.handleHomeRoute(req, res);
  } else if (routes.includes(url)) {
  handlers.handlePublic(req, res, url);
  } else if (url.indexOf("/data") !== -1) {
  handlers.handlePartners(req, res);
  } else {
  res.writeHead(404, "Content-Type: text/html");
  res.end("<h1>404 File not found</h1>");
  }
};

module.exports = router;
