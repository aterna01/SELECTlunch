const fs = require("fs");
const path = require("path");
const request = require("request");

// home route
const handleHomeRoute = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>Sorry, we've had a problem on our end</h1>");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

// files
const handlePublic = (request, response, url) => {
  const filePath = path.join(__dirname, "..", "public", url);
  const ext = url.split(".")[1];
  const extType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-icon",
    jpg: "image/jpeg",
    png: "image/png"
  };
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("<h1>File not found</h1>");
    } else {
      response.writeHead(200, { "Content-Type": `${extType[ext]}` });
      response.end(file);
    }
  });
};

const handlePostData = (request, response) => {
  console.log("this is a post request in the handlePostData handler");
  if (request.method == "POST") {
    var inputReceived = "";

    request.on("data", function(data) {
      inputReceived += data;
    });

    request.on("end", function() {
      console.log(JSON.parse(inputReceived));
    });
  }
};

// XMLHttpRequests - get data from database etc.
const handlePartners = (request, response) => {
  // something to call sql functions to get stuff from database goes here...
};

// export all of this
module.exports = {
  handleHomeRoute,
  handlePublic,
  handlePartners,
  handlePostData
};
