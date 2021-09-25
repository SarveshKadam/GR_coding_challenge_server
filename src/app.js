const express = require("express");
const app = express();
const dotenv = require("dotenv");
const reviews = require("./routes/reviews");
const mongoose = require("mongoose");
const cors = require('cors')
app.use(cors({origin:'https://gumroad-rating.netlify.app',credentials:true}))

dotenv.config({ path: "./config/dev.env" });

app.use(express.json());
app.use("/", reviews);

//MongoDB Setup
mongoose.connect(process.env.DATABASE);

const db = mongoose.connection;
db.on("error", (error) => console.error("You got an error", error));
db.once("open", () => {
  console.log("Database is connected");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.PORT}`);
});
