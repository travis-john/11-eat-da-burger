//Global variables
const express = require("express");
const handlebars = require("express-handlebars");
const routes = require("./controllers/burgers_controllers");
const PORT = process.env.PORT || 3000;
const app = express();

// Configuring app
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
