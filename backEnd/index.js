const express = require("express")
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/register", (req, res) => {
    let {user, passowrd} = req.query;
    res.send(`standard GET response.Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    console.log(req.body);
    res.send("standard POST response");

});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});