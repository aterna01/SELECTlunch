const fs = require("fs");
const path = require("path");
const request = require("request");

// getData and postData
const postData = require('./handler/postData');
const getData = require('./handler/getData');


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
}


// files
const handlePublic = (request, response, url) => {
    const filePath = path.join(__dirname, "..", "public", url);
    const ext = url.split('.')[1];
    const extType = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        ico: 'image/x-icon',
        jpg: 'image/jpeg',
        png: 'image/png'
    }
    fs.readFile(filePath, (error, file) => {
        if (error) {
        console.log(error);
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("<h1>File not found</h1>");
        } else {
        response.writeHead(200,  {  "Content-Type" : `${extType[ext]}` } );
        response.end(file);
        }
    });
}



// XMLHttpRequests - get data from database etc.
const handlePartners = (request, repsponse) => {
    // something to call sql functions to get stuff from database goes here...
}





const handlePost = (request, response) => {

    // standard form behaviour - data gets sent to a new webpage in html format
     
    // receive data from the form
    let allTheData = '';
    request.on('data', function (chunkOfData) {
        // text from form - outputs buffers
        allTheData += chunkOfData;
    });

    request.on('end', function () {
        // parse form data
        const formData = allTheData.split(',');
        

        // post to db
        postData(formData, (err, res) => {
            if (err) console.log(err);

            // use this to populate tables
            console.log(formData);


            // get data after form post
            // getData()

        })
        // allTheData.map(item, i => console.log(item[i]));

        // console.log(JSON.parse(allTheData));

        
        // const convertedPost = querystring.parse(allTheData);
        // console.log(convertedPost);
        
        // // handle redirect?
        // // - 301 keeps it on the same page
        // response.writeHead(301, {"Location": "/"});
        // response.end()
    });
}



// export all of this
module.exports = {
    handleHomeRoute,
    handlePublic,
    handlePartners,
    handlePost
}