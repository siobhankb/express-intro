const express = require('express');
const app = express()
const port = 7000

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index', {users})
    // res.send('Hello World')
})

const users = [
  {
    id: 1,
    username: "elephant",
    color: "grey",
  },
  {
    id: 2,
    username: "piggy",
    color: "pink",
  },
  {
    id: 3,
    username: "bigguy",
    color: "blue",
  },
  {
    id: 4,
    username: "squirrel",
    color: "brown",
  },
  {
    id: 5,
    username: "snake",
    color: "green",
  },
];

app.get('/users', (req, res) => {
    res.render('users', {users})
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    for (u of users) {
        if (u.id == id) {
            res.render('user', {user: u})
        }
    }
    res.send({error: `user with ${id} does not exist`})
})

app.get("/apple", (req, res) => {
  res.send("this is Apple");
});

app.listen(port, () => {
    console.log(`Server started at ${port}`)
})