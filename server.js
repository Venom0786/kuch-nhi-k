const tokens = [
"ODUwMTk3ODQxNDY1MDQ5MDg4.YLn6CQ.kSmMawIoj4AyAzMaWdpMYnHEPC4",
"ODUwMTk0NDM4MTk4MDAxNjc0.YLn60g.DsodutnIcf5T_5PdkenhLgK5w7E"
];
//aate hi proje812540119319969813rror aane lage --
const spamChannelIds = [ "850296455259881473"];

//Coding Starts
const { Client } = require("discord.js");

tokens.forEach(token => {
  let client = new Client();
  client.on("ready", () => {
    console.log(client.user.tag + " has been logged in");
    client.user.setStatus("online");
    setInterval(async () => {
      var getTheShit =
        spamChannelIds[Math.floor(Math.random() * spamChannelIds.length)];
      var shit = client.channels.get(getTheShit);
      if (!shit) return;
      await shit.send("SPAM FOR LEVEP UP").catch(() => {
        console.log("Error Somewhere");
      });
    }, 2000); //1 millisecond cooldown
  });
  client.login(token);
});

//Express starts
const app = require("express")();
app.listen(3000);
app.get("/", (req, res) => res.send("Sup"));
