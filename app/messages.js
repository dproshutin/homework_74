const express = require("express");
const fs = require("fs");
const router = express.Router();


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

module.exports = router;