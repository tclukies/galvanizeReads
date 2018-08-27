const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = parseInt(process.env.PORT || 3000);
const queries = require("./queries.js");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

app.get("/books", (request, response, next) => {
    queries
        .listBooks()
        .then(posts => {
            response.json({ posts });
        })
        .catch(next);
});

app.listen(port)
    .on("error", console.error.bind(console))
    .on("listening", console.log.bind(console, "Listening on " + port));
