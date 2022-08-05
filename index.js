const express = require("express");
const app = express();
const port = 3030;

const cors = require("cors");
const morgan = require("morgan");

// SETUP MIDDLEWARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// REQUIRE ROUTERS
const usersRouter = require("./src/routers/users");

// ADD ROUTERS TO APP

app.use("/users", usersRouter);

data = require("./data");

app.get("/", (req, resp) => {
  resp.send(data);
});

/* START SERVER */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
