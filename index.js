const express = require("express");
const app = express();
const cors = require("cors");
const articles = require("./routes/articles");

app.use(express.json());
app.use(cors());

app.use("/api/articles", articles);

app.listen(5000, () => {
    console.log("listening on port 5000...");
});


