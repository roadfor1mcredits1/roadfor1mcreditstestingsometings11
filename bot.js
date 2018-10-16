const Discord = require('discord.js');                       
const db = require('quick.db');                                  
const client = new Discord.Client();                       
const giphy = require('giphy-api')();                              
const googl = require('goo.gl');           
const translate = require('google-translate-api');     
const fs = require("fs");    
const getYoutubeID = require('get-youtube-id');                           
const moment = require("moment");                             
const { Client, Util } = require('discord.js');              
const UserBlocked = new Set();            
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
,ti={}  
,spee={};       
const prefix = '.';

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------


var ServerID = "487639982845067264"; //اي دي السيرفر
var ChannelID = "487699889535582228";// اي دي الروم

client.on('warn', console.warn);

client.on('error', console.error);
// Codes server - !.Zeyad' , ♚Roýale#5555


client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By Zeyad,Royale','\n','ProBot credits miner is ready!'));// Codes Server` - iiZeyad , Roýale"1.5k 🍷#1111

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));// Codes server - !.Zeyad' , ♚Roýale#5555


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , ♚Roýale#5555


    });
}

var timer = setTimeout(timerFunc, 1000);

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------

client.on('ready', () => {
    client.channels.get("501724523368808458").join();
    }); 




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
