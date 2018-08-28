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

app.get("/api/books", (request, response, next) => {
    queries
        .listAPIBooks()
        .then(books => {
            response.json({ books });
        })
        .catch(next);
});

app.get("/books", (req, res, next) => {
    queries
        .listBooks()
        .then(authors_books => {
            res.render("books", { authors_books });
        })
        .catch(next);
});

app.get("/authors", (req, res, next) => {
    queries
        .listAuthors()
        .then(authors_books => {
            res.render("authors", { authors_books });
        })
        .catch(next);
});

app.get("/books/:id", (req, res, next) => {
    queries
        .listBooksByID(req.params.id)
        .then(authors_books => {
            res.render("showBook", { authors_books });
        })
        .catch(next);
});

app.get("/authors/:id", (req, res, next) => {
    queries
        .listAuthorsByID(req.params.id)
        .then(authors_books => {
            res.render("showAuthor", { authors_books });
        })
        .catch(next);
});

app.listen(port, () => {
    console.log("listening on port", port);
});
