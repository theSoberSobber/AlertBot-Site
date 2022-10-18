const express = require("express");
const app = express();

app.listen(process.env.PORT || 7000);
// _____________________________________
const { getCurrIp } = require('./ipHandler.js');
// _____________________________________
app.get("/", async (req, res) => {
  res.status(200).send("AlertBot@2022");
});

app.get("/:name/group", async (req, res) => {
    let curr_ip = await getCurrIp();
    res.redirect(`http://${curr_ip}:3000/${req.params.name}/group/`);
});

app.get("/groupIds", async (req, res) => {
    let curr_ip = await getCurrIp();
    res.redirect(`http://${curr_ip}:3000/groupIds`);
});