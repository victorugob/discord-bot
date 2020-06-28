const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    
    if(message.content.includes('ark')) 
        message.reply('não fale desse jogo aqui não');

        
    

    // if(message.content =='!grito' + nick) {
    //     message.reply('oi migo chamado' + nick )
    // }

    console.log(message.reply);
});

bot.login(process.env.BOT_TOKEN);