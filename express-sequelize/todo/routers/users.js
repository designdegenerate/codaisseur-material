const {Router} = require('express');
const nestedRouter = require("./nestedrouter");
const User = require("../models").user;
const TodoItem = require("../models").todoItem;
const TodoList = require("../models").todoList;

const router = new Router;

router.use("/nest", nestedRouter)

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: TodoList,
          include: [
            {
              model: TodoItem,
            },
          ],
        },
      ],
    });
    res.send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await User.findByPk(id);

    if (!user) {
      res.status(404).send("user not found");
    } else {
      res.send(user);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const newUser = await User.findByPk(id);
    const updatedUser = await newUser.update({ name, email });
    res.send(updatedUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    await user.destroy();
    res.send(`User with id ${id} deleted`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({ name, email });
    res.send(newUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;