const express = require("express");
const fs = require("fs");
const router = express.Router();
const NUMBER_OF_LAST_MESSAGES = 5;


router.post("/", (req, res) => {
    const message = req.body;
    const date = new Date();
    const datetime = date.toISOString();
    const fileName = "messages/" + datetime + ".txt";
    const data = {
        ...message,
        datetime
    };
    fs.writeFileSync(fileName, JSON.stringify(data));
    res.send(data);
});

router.get("/", (req, res) => {
    fs.readdir("messages/", (err, files) => {
        if (err) {
            throw new Error(err);
        }
        let messages = files.slice(-NUMBER_OF_LAST_MESSAGES).map(file => {
            let item = fs.readFileSync("messages/" + file);
            return JSON.parse(String(item));
        });
        return res.send(messages);
    });
});

module.exports = router;