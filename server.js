
const express = require('express');

const app = express();

const port = 3000;

// app.get("route", callback function)

app.get("/", function (req, res) {
    response.send("<h1>Hello</h1>");
    console.log(request);
});


// Creating a server

app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});
