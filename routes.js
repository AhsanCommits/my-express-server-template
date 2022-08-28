
const express = require('express');

const app = express();

const port = 3000;

/*
*************************
        Routing
*************************
*/

app.get("/", (req, res) => {
    res.send("<h1>Hello & Welcome</h1>");
});

app.get("/contact", (req, res) => {
    res.send("Contact me at: ahsanraza00059@gmail.com");
});

app.get("/about", (req, res) => {
    res.send("<h4>Full Stack Web Developer experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML, CSS, Bootstrap, JavaScript, Node JS, React JS, MongoDB and Python.</h4>")
});

app.get("/skills", (req, res) => {
    res.send("<ol><li>HTML</li><li>CSS</li><li>JS</li><li>NODE</li><li>EXPRESS</li><li>MONGODB</li><li>REACT</li></ol >");
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
