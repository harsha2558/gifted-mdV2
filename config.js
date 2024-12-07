const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="admin@giftedtechnexus.co.ke"
global.location="Eldoret,Kenya."
global.mongodb= process.env.MONGODB_URI || ""

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Giftedmaurice/gifted-mdV2";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/54efddccf41281ad7ec51.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254728782591";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254728782591,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254728782591,254xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://qr-scan.giftedtechnexus.co.ke";


global.SESSION_ID = process.env.SESSION_ID ||  "GIFTED_14_22_12_07_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUxndG45NGVxSkJCaXprOWp1bzVCVHZxYjdWQVBGcVV4SEVWZ1FkUnNVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3YyS09xMldsQkl3Y1lBcXhmc0llZjVDdmJBb1J6c3RpOXJmNXp1WGt4MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TzVsZERPcmVicTROTGxiVkRETVEzTVFPa2YyT2QvRURVQzVoVUhyNFhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5YXliWGFpK2JGTk1CTTlScVFIZkY3OWo5NlNFaWRPVTVqa3VXSkhLdFFNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlJQ3BXdHNJRUljR24rU052eXRFaWR1djhEUEMrTnBiMzZab3p2MVUrV1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY4VVBDdlREanNJR2kwMTZ4ZW9nbnhsZlVNZ0dhV0RmYWx2NTBBamVreWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS00wZmZOei96bXRFM1FpbG85MS9rTFJRa2dZWEpEdjRYOE9SclZQWGdsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2J3RjBqSkN1bVQ0bE9EeVhENlM3aVVXRXZyU0RjWFY1aUp4ZjlHYVgwcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFxVFVBTXc3NlN4eCt4dGM0dGViT0R2OEExd3FXeCtFbWZabHFCMVhNU2hQT2pSSDVpbkhhVUJma3lVOStYQjVEa3RuT0NySjB5ZjBya3FSN1I4QkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiJrSy9xZzR3dnhHOGlpaW5JZllrRHlRd01UVDd5TGtUS3RRSzJEZkh0MGVjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqeVZLYjlFYVRZZUU1RGdwNUd1V193IiwicGhvbmVJZCI6IjU4YzBkN2QxLWMzM2QtNDJmYy04ZmMzLWRiZjVjNDRjMDE4MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QzY3TFNCT3AxZ0wyQmpPaE1rV0c3Y2Z3SzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVZHeEJXQWQxOERjVHQ3NlM0bmpiWWRyS2dRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZTSDQ2SDk5IiwibWUiOnsiaWQiOiI5NDcyNzc4Njc2MDo3MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCHXG5cblxuXG4gICAgICAgICAgICAgICAgICBcblxu8J2QgFxuXG5cblxuICAgICAgICAgICAgICAgICAgXG5cbvCdkJJcblxuICAgICAgICAgICAgICAgICBcblxuXG5cbvCdkIcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BhSW1LUUVFSVcwMGJvR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhJZW9CWXFCNDlsN2Y1R0V6MXlGN1pmSXdkdDROdzF3dUNMU0xBTjQ0UVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlcvQXBlSjAwc3lYNVF2OWRseFFJRTljNkdpNkJFMmdhUDIrNzVENTFITmhVNmREUFkrVUZ0dTJBcmhST3A5NDQ3KzRwM21QRWJXUXc4QWVZZUI0YkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHV3BENjNnakJmWHJrdDVmTDk2bXo0WG9vMDJkTVBJWlpoM3dUT1dqQWRRa1UyUEZWOTFYSFNvOTE3N1BGL0ZRNlRBeFh5TXZ6MktSUGRCUzdab21DUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzI3Nzg2NzYwOjcxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJ5SHFBV0tnZVBaZTMrUmhNOWNoZTJYeU1IYmVEY05jTGdpMGl3RGVPRUcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM1ODEzMjEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlVOIn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.2.0.0",
  caption : process.env.CAPTION || "©²⁰²⁴ ɢɪғᴛᴇᴅ ʙᴏᴛ ᴍᴅᵛ²•⁰•⁰" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ʙᴏᴛ ᴍᴅᵛ²•⁰•⁰ - ²⁰²⁴ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ɢɪғᴛᴇᴅ ᴛᴇᴄʜ』*\n youtube.com/@giftedtechnexus"),
 
  author : process.env.PACK_AUTHER|| "Gifted-MD",
  packname: process.env.PACK_NAME || "💗",
  botname : process.env.BOT_NAME  || "ɢɪғᴛᴇᴅ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It's Gifted",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "GIFTED",



};

























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
 
