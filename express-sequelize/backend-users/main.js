const express = require("Express");
const User = require("./models").user;
const app = express();
const PORT = 3000;

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));