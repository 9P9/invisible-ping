const request = require('request');
const colors = require('colors');
const chalk = require('chalk');
const prompt = require('prompt');
const fs = require('fs');

process.on('uncaughtException', e => {});
process.on('uncaughtRejection', e => {});
process.warn = () => {};
const inject =  "||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||";

function invisible(token,channel,message,ping){
	request({
		method: "POST",
		url: `https://discord.com/api/v8/channels/${channel}/messages`,
		json: true,
		headers: {
			"Content-Type": "application/json",
			authorization: token, 
			},
		body: {
			"content": message + inject + ping,			
		}
	}, (err, res, body) => {
		if (res && res.statusCode === 200) {
			console.log(chalk.inverse("[INFO] Message Sent Successfully!"));
		}
		else{
			console.log(chalk.red("Failed (idk how you managed this bruh)")); 
		}
	});
}
console.log(chalk.inverse("				 ▄▄ •  ▄ .▄      .▄▄ · ▄▄▄▄▄   ▄▄▄·▪   ▐ ▄  ▄▄ •  "));
console.log(chalk.inverse("				▐█ ▀ ▪██▪▐█ ▄█▀▄ ▐█ ▀. •██    ▐█ ▄███ •█▌▐█▐█ ▀ ▪ "));
console.log(chalk.inverse("				▄█ ▀█▄██▀▐█▐█▌.▐▌▄▀▀▀█▄ ▐█.▪   ██▀·▐█·▐█▐▐▌▄█ ▀█▄ "));
console.log(chalk.inverse("				▐█▄▪▐███▌▐▀▐█▌.▐▌▐█▄▪▐█ ▐█▌·  ▐█▪·•▐█▌██▐█▌▐█▄▪▐█ "));
console.log(chalk.inverse("				·▀▀▀▀ ▀▀▀ · ▀█▄▀▪ ▀▀▀▀  ▀▀▀   .▀   ▀▀▀▀▀ █▪·▀▀▀▀  "));
console.log("						Created by Luci");
process.title = "[313] Invisible Ping Tool"; 
prompt.get(['token', 'channel', `message`,`ping`], function(err, result) {
    console.log('');
	const token = result.token; 
    const channel = result.channel;
    const message = result.message;
	const ping = result.ping;
    invisible(token,channel,message,ping); 
});
	