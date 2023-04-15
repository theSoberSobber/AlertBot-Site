const express = require("express");
const app = express();

app.listen(process.env.PORT || 3001);
console.log(`Server listening at ${process.env.PORT||3001}`);
// _____________________________________
app.get("/", async (req, res) => {
  res.status(200).send(`<b>AlertBot@2023</b> 
<br/>
To use AlertBot<sup>TM</sup>, add <a href="tel:+919770483089">it's number</a> to a whatsapp group and type /help.`);
});

app.get("/:cName/group", async (req, res) => {
  res.status(200).send(`We have removed the support for <b>dyanmic groups</b> now. <br />
Please add <a href="tel:+919770483089">this number</a> to your group and then write "/setup ${req.params.cName}"`);
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.redirect("https://alertbot.vercel.app/");
});