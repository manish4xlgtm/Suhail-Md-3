const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_40_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxLFxuICAgICAgICA2MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1OSxcbiAgICAgICAgOCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMSxcbiAgICAgICAgNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDU3LFxuICAgICAgICAzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgNjEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1LFxuICAgICAgICA4NixcbiAgICAgICAgMTk5LFxuICAgICAgICA2LFxuICAgICAgICAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NixcbiAgICAgICAgMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxLFxuICAgICAgICAxODksXG4gICAgICAgIDE0LFxuICAgICAgICA0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDEwLFxuICAgICAgICA0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDcxLFxuICAgICAgICA0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4LFxuICAgICAgICA1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgxLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNixcbiAgICAgICAgNDgsXG4gICAgICAgIDk0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvd3M1MTRNb1Fkb1J6Z1dKYWNjVTVLajBtdlRMRHVoK1M1OXY5citWSkZnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk3Nzk4MDgwODA3NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFDMEVEMDg1MERFNTIzNjE1OEEzN0ZERDRGNUIyN0I3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1OTkxMjgzNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk3Nzk4MDgwODA3NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFDMzk4RUU2M0NGOUZBMEYyNEZGODE0RTY5QzE3OTA2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1OTkxMjgzNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk3Nzk4MDgwODA3NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFDMDYzNjBCRDMwQzM1NDJCQzI2QTI5QjFEMEIyMTRBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1OTkxMjgzOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiYm03SjZrTlNvLVIwQl9jbzhmY2NBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjllY2ZiY2M0LTA5ZDQtNDg1YS04NmQwLTg1YmM4ODVlMWQ3MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDEzLFxuICAgICAgMSxcbiAgICAgIDYsXG4gICAgICAxODQsXG4gICAgICA3MixcbiAgICAgIDE2NixcbiAgICAgIDg1LFxuICAgICAgNTQsXG4gICAgICAxMDYsXG4gICAgICA0NSxcbiAgICAgIDEwNSxcbiAgICAgIDM4LFxuICAgICAgMzYsXG4gICAgICAxMzEsXG4gICAgICAyMzAsXG4gICAgICA1NSxcbiAgICAgIDIxMixcbiAgICAgIDYxLFxuICAgICAgMjQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDEyNCxcbiAgICAgIDM1LFxuICAgICAgMTgzLFxuICAgICAgOSxcbiAgICAgIDI4LFxuICAgICAgMTgsXG4gICAgICAzMCxcbiAgICAgIDc4LFxuICAgICAgNDksXG4gICAgICAyMjEsXG4gICAgICAxODYsXG4gICAgICAxMCxcbiAgICAgIDE4OCxcbiAgICAgIDc5LFxuICAgICAgODMsXG4gICAgICA2OCxcbiAgICAgIDczLFxuICAgICAgMjAxLFxuICAgICAgMjQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnFWakxJRkVQN0dtTWNHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxZEdubTd0TENmVkJQTVB4eEdxcUoyb29wYlJhOVNoQWlLTVVseVZLUUZJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm12OUs4R1o0S0U3WEZ6anlSNE1aaUw0Uk95Ynh4SW5XVXZnaWtVbEtPeGhZandNNlcxTEt1L3AyYUNrWUxTeTVaMyszUEwyTEdlMHN3WTA5dlZYOEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlpSTWRVR2RWL0ZCeDR3SVMzaUdDbzlVUmpnd29JS01CdTAwZXlxY2VRRTBzaU96VzBFeEpTTWlMU1ByN1ZFTlBodFgrMlZwNnNYVVJMYk1XR2RneERBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTc3OTgwODA4MDc3MDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjgzOTM0ODc0MjU2NTA6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNQU5JIFhcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk3Nzk4MDgwODA3NzA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1OTkxMjgzNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdsc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2xzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTUVhNERmdHBnWHNhaEVZT2dHNXdxVVNtb2FaSmpFZnBMSWVTZVRFQnZzOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDQ3MjM0MjAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTk5MTI0OTc2MjRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MANI X",
  ownername:process.env.OWNER_NAME|| "MANI :<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

