const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

// Define paths for express config.
const publicDirPath = path.join(__dirname, "..", "public");
const viewsDirPath = path.join(__dirname, "..", "templates", "views");
const partialDirPath = path.join(__dirname, "..", "templates", "partials");

// Setup handlebars engine and views location.
app.set("views", viewsDirPath);
app.set("view engine", "hbs");

// Register partial files to hbs
hbs.registerPartials(partialDirPath);
// Setup static directory to serve.
app.use(express.static(publicDirPath));

app.get("/", (req, res) => {
  res.render("index", { title: "Weather", name: "Abdelrahman Shaheen" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Me", name: "Abdelrahman Shaheen" });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Abdelrahman Shaheen",
    message: "Work hard bro",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "You must provide an address" });
  }
  const address = req.query.address;
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error: error });
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error: error });
      }
      res.send({
        forecast: forecastData,
        location,
        address,
      });
    });
  });
});
app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Abdelrahman Shaheen",
    errorMessage: "Help article not found",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Abdelrahman Shaheen",
    errorMessage: "Page not found",
  });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port 3000");
});
