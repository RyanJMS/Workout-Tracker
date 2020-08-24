// Define dependencies

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");

// Set PORT to environment variable PORT or localhost://3000 if there's nothing else

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
