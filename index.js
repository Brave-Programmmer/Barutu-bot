import { Client, GatewayIntentBits, EmbedBuilder, WebhookClient } from "discord.js";
// import { value } from "./script.js";
import express from 'express';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});
const webhookClient = new WebhookClient({ url: "https://discord.com/api/webhooks/1155168489582108682/I-b0rY4gXBHDJ6PyrVwEBsKILYW1RSWKUBywn8-hFYS7IAfiVNzPYVRupbR35WAUEf1j" });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
// Reply to a user who mentions the bot
client.on('messageCreate', message => {
  console.log(`I see a message!`);
  if (message.mentions.has(client.user)) {
    console.log(`I see a mention!`);
    const messagelowered = message.content.toLowerCase()
    const messagedata = messagelowered.replace("<@1155146177654837360>", "")
    const messagedataarray = messagedata.split(" ");
    console.log(messagedataarray)
    message.channel.send('did you mention me i will give the webhook like wait');

    const embed = new EmbedBuilder()
      .setTitle("email is: " + messagedataarray[1] + " &" + "ign is:" + messagedataarray[2])
      .setColor(0x00FFFF);
    webhookClient.send({
      content: "email is: " + messagedataarray[1] + " " + "ign is:" + messagedataarray[2],
      username: 'Batutu Webhook',
      avatarURL: 'https://i.imgur.com/AfFp7pu.png',
      embeds: [embed],
    });
  }
});
// if(email.value != null){
//     client.on('webhookUpdate', message => {
//         console.log(`I see a message!`);
//             message.channel.send('data uploaded'); 
//     });
// }

client.login("MTE1NTE0NjE3NzY1NDgzNzM2MA.Gx0Foy.g4mCabrWcSJleQpn2dc__kACQct2dgJ1lh-PWY")
// const app = express()
// const data ={};
// app.set('view-engine', 'ejs')
// app.use(express.urlencoded({ extended: false }))
// app.get("/", (req, res) => {
//     res.render("index.ejs")
// })
// app.post("/", async (req, res) => {
//     const value = {
//         email: req.body.exampleFormControlInput1,
//         ign: req.body.exampleFormControlInput2
//     }
//     data = value;
// })
// console.log(data)
// app.listen(3000)
