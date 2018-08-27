const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = parseInt(process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(cors);

app.listen(port)
    .on("error", console.error.bind(console))
    .on("listening", console.log.bind(console, "Listening on " + port));
