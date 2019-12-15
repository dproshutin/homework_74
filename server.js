const express = require("express");
const app = express();
const messages = require("./app/messages");

const PORT = 8000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Main page</h1>  
    `);
});

app.use(express.json());
app.use("/messages", messages);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT} port`);
});