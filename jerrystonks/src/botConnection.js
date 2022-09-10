require("dotenv").config(); //to start process from .env file
const {Client, GatewayIntentBits}=require("discord.js");
const client=new Client({
    intents:[
        GatewayIntentBits.Guilds,//adds server functionality
        GatewayIntentBits.GuildMessages,//gets messages from our bot.
        GatewayIntentBits.MessageContent
    ]
});
client.once("ready", () =>{
    console.log("BOT IS ONLINE"); //message when bot is online
})
client.login(process.env.TOKEN);

client.on('messageCreate', (messages) => {
    //console.log(messages.content.toLocaleLowerCase());
    console.log(messages);
    if(messages.content.toLocaleLowerCase()==='hello') 
    messages.channel.send('hello' + ' '  + messages.author.username); //reply hello word message with senders name
})
