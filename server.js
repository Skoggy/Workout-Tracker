const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


//require("./seeders/seed.js")
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://Skoggy:c67V3ktX0NWHsfWg@fitnesstracker.qp9qq.mongodb.net/sample_mflix?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    { useUnifiedTopology: true });



require("./routes/html-routes.js")(app)
require('./routes/api-routes')(app)


// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
