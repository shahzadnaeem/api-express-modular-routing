const express = require("express");
const router = express.Router();

let { users } = require("../../data");
let id = users.reduce((m, u) => (u.id > m ? u.id : m), 0) + 1;

router.get("/id", (req, resp) => {
  resp.json(id);
});

router.get("/", (req, resp) => {
  resp.json(users);
});

router.get("/:id", (req, resp) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => {
    return u.id === id;
  });

  if (user) {
    resp.json({ user });
  } else {
    resp.sendStatus(404);
  }
});

router.post("/", (req, resp) => {
  let user = { ...req.body, id: id++ };

  users.push(user);

  resp.json(user);
});

router.put("/:id", (req, resp) => {
  const id = parseInt(req.params.id);
  let user = users.find((u) => {
    return u.id === id;
  });

  if (user) {
    user.email = req.body.email || user.email;
    resp.json({ user });
  } else {
    resp.sendStatus(404);
  }
});

router.delete("/:id", (req, resp) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => {
    return u.id === id;
  });

  if (user) {
    users.splice(users.indexOf(user), 1);
    resp.json({ user });
  } else {
    resp.sendStatus(404);
  }
});

module.exports = router;
