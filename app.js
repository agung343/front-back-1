const express = require ('express');

const app = express();

app.get ("/", (req, res) => {
    res.send("Hello from server");
})
app.post("/post", (req, res) => {
    console.log("Connected");
    res.redirect("/");
})

app.listen(5000, () => console.log("Server listening at port 5000"));