const express = require("express");
const PORT = 3000;

const app = express();
// const customHeader = require("./customHeader");

const userRouter = require("./routers/users");
const TodoItem = require("./models").todoItem;
const TodoList = require("./models").todoList;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

app.use(express.json());

app.use(customHeader());

app.get("/", (req, res, next) => {
  res.send("Welcome to my API");
});

app.use("/users", userRouter);


app.get("/users/:id/todolist", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await User.findByPk(id, {
      include: [
        {
          model: TodoList,
        },
      ],
    });
    res.send(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

app.get("/users/:id/:listid", async (req, res, next) => {
  try {
    const { id, listid } = req.params;
    console.log(id, listid);
    const user = await User.findAll({
      where: {
        id: id,
      },
      include: [
        {
          model: TodoList,
          where: {
            id: listid,
          },
          include: [
            {
              model: TodoItem,
            },
          ],
        },
      ],
    });
    res.send(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
