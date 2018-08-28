const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = parseInt(process.env.PORT || 3000);
const queries = require("./queries.js");
const morgan = require("morgan");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/books", (request, response, next) => {
    queries
        .listBooks()
        .then(books => {
            response.json({ books });
        })
        .catch(next);
});

app.listen(port, () => {
    console.log("listening on port", port);
});
