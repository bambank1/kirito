/*
ππΈπ΅ππΌππΈ ππΈππ π΄ππΌ ππ΄ππΊ π·πΌ ππΆ πΌππΌ
LolHuman = https://api.lolhuman.xyz/
Zekais = http://zekais-api.herokuapp.com/
XziyApi = https://ziy.herokuapp.com/
ZeksApi = https://zeks.me/

Kalo Mau Work All Fitur Ya Beli Apikey Di Webnya
Cuman LolHuman & ZekaisApi Doang Kurang

π΅πππ : ππͺπ­πͺπ³π’π― πππ ππ¦ ππ¦π­πͺ , ππ©π© ππ±πͺπ¬π¦πΊ ππΊπ’ ππ’π¨π’:v
*/

const {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
const speed = require('performance-now')
const request = require('request')
const fs = require('fs')
const crypto = require('crypto')  
const yts = require('yt-search')
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require('child_process')
const { color, bgcolor } = require('./lib/color')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { fetchJson, fetchText } = require('./lib/fetcher')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require("./lib/functions");
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

const game = require("./lib/game");

//Database
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var _registered = JSON.parse(fs.readFileSync('./storage/user.json'))

//Setting
prefix = setting.PrefixNya
const gcount = setting.gcount
var owner = setting.OwnerNumber
var ownerName = setting.OwnerName
var botName = setting.BotName
var fakeyoi = setting.FakeNya
var lolkey = setting.LolHuman
var zekais = setting.ZekaisApi
var xziyApi = setting.XziyApi
var zeksApi = setting.ZeksApi
var creator = 'KiriTo Official'

img1 = fs.readFileSync('./img/fake.jpg')
img2 = fs.readFileSync('./img/thumb.jpg')

var todd = 'ππ ππ’π΄π¦ ππ―πͺ ππΆπ’π΅π’π― ππ¦πΉπΉπΊ ππ§π§πͺπ€πͺπ’π­ ππͺπ­π’π©π¬π’π― ππͺ ππ’π¬π¦ ππͺπ¬π’ ππ―π¨πͺπ― ππ¦π€π°π₯π¦ ππ΅π’πΆ ππ¦πΆπ±π­π°π’π₯ ππ°π­π°π―π¨ ππ³π¦π’π΅π°π³ ππ’π―π¨π’π― ππͺ ππ’π±πΆπ΄ ππ’π― ππ’π³π¨π’πͺ ππ’π³πΊπ’ ππ³π’π―π¨'

//Jam
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const tima = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')         

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
//Modul
module.exports = LexxyOFC = async (LexxyOFC, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
global.prefix
global.blocked		
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const date = new Date().toLocaleDateString()
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
const args = body.trim().split(/ +/).slice(1)
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
const isCmd = body.startsWith(prefix)
const timestampi = speed();
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const hour_now = moment().format('HH:mm:ss')
const latensyi = speed() - timestampi
const ownerNumber = [`6281392717132@s.whatsapp.net`,`${owner}@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
const totalchat = await LexxyOFC.chats.all()
const groupMetadata = isGroup ? await LexxyOFC.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const Verived = "0@s.whatsapp.net"
const num = "6281392717132@s.whatsapp.net"
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const conts = mek.key.fromMe ? LexxyOFC.user.jid : LexxyOFC.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? LexxyOFC.user.name : conts.notify || conts.vname || conts.name || '-'
const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
const q = args.join(' ')

//Mess
mess = {
			wait: "[β] ππΆπ―π¨π¨πΆ ππ¦π£π¦π―π΅π’π³...",
			success: "[β] ππ°π―π¦ ππͺπ© ππ’π¬",
			error: {
				stick: "[β] ππ’π¨π’π­ π¬π’π¬ π€π°π£π’ π­π’π¨πͺ",
				Iv: "Link Nya Eror Kack"
			},
			only: {
				admin: "Fitur ini Khusus Admin Grup",
				owner: "Fitur ini Khusus Owner",
				group: "Fitur Hanya Bisa di Grup"
			}
		}
const katalog = (teks) => {
             res = LexxyOFC.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_Β© Lexxy Official_*", "thumbnail": img2, "surface": 'CATALOG' }}, {quoted:ftrol})
             LexxyOFC.relayWAMessage(res)
             }
const reply = (teks) => {
            LexxyOFC.sendMessage(from, teks, text, {quoted: mek})
        }
var costum = (pesan, tipe, target, target2) => {
LexxyOFC.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}       

//button
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = LexxyOFC.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "π΄π¬π΅πΌ","footerText": `Sc By LexxyOFC`,"listType": "SINGLE_SELECT","sections": list}}, {})
            return LexxyOFC.relayWAMessage(po, {waitForAck: true})
        }
		// GAME 
             game.cekWaktuFam(LexxyOFC, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_π? Tebak Gambar  π?_*\n\n** *Jawaban Benarπ *\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                LexxyOFC.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_π? Tebak Anime π?_*\n\n** *Jawaban Benarπ*\n** *Mendapatkan* : _Rp ${htgmu} π°_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_π? Tebak Lagu π?_*\n\n** *Jawaban Benarπ*\n** *Mendapatkan* : _Rp ${htpl} π°_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_π? Tebak Tebakan π?_*\n\n** *Jawaban Benarπ*\n** *Mendapatkan* : _Rp ${htpu} π°_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_π? Kuis Matematika  π?_*\n\n** *Jawaban Benarπ*\n** *Mendapatkan* : _Rp ${htcc} π°_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_π? Asah Otak  π?_*\n\n** *Jawaban Benarπ*\n** *Mendapatkan* : _Rp ${htgm} π°_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_π? Caklontong  π?_*\n\n** *Jawaban Benarπ*\n** *Mendapatkan* : _Rp ${htgmi} π°_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_π? Tebak Jenaka  π?_*\n\n** *Jawaban Benarπ*\n** *Mendapatkan* : _Rp ${htgmuu} π°_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_π? Tebak Lirik π?_*\n\n** *Jawaban Benarπ*\n** *Mendapatkan* : _Rp ${htgmii} π°_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_π? Tebak Kimia π?_*\n\n** *Jawaban Benarπ*\n** *Mendapatkan* : _Rp ${htgmcc} π°_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_π? Tebak Siapakah Aku  π?_*\n\n** *Jawaban Benarπ*\n** *Mendapatkan* : _Rp ${htgmk} π°_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_π? Tebak Bendera  π?_*\n\n** *Jawaban Benarπ*\n** *Mendapatkan* : _Rp ${html} π°_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_π? Susun Kata  π?_*\n\n** *Jawaban Benarπ*\n** *Mendapatkan* : _Rp ${htmp} π°_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_π? Tebak Kata  π?_*\n\n** *Jawaban Benarπ*\n** *Mendapatkan* : _Rp ${htmu} π°_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                }
            }        
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
LexxyOFC.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
LexxyOFC.sendMessage(from, hasil, type, options).catch(e => {
LexxyOFC.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{	    	
        if(mids.length > 0){		    
        text = normalizeMention(to, text, mids)	    	
        }		    
        const fn = Date.now() / 10000;		    
        const filename = fn.toString()	     	
        let mime = ""		    
        var download = function (uri, filename, callback) {		   
        request.head(uri, function (err, res, body) {			
        mime = res.headers['content-type']			
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);		   
        });		   
        };		    
        download(url, filename, async function () {		    
        console.log('done');		    
        let media = fs.readFileSync(filename)		    
        let type = mime.split("/")[0]+"Message"		    
        if(mime === "image/gif"){			
        type = MessageType.video			
        mime = Mimetype.gif		    
        }		    
        if(mime.split("/")[0] === "audio"){			
        mime = Mimetype.mp4Audio		    
        }		    
        LexxyOFC.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})		    		    
        fs.unlinkSync(filename)		    
        });	       
        }
        
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));  
      }
          	        
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " βπππ, " : " π»πππ, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " πππ, " : " π½ππ, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " πππππ‘, " : " πππππ‘, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " πππ‘ππ" : " π·ππ‘ππ") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
//Jam Hari Tanggal Tahun
var datw = new Date();
var tahun = datw.getFullYear();
  var bulan = datw.getMonth();
    var tanggal = datw.getDate();
      var hari = datw.getDay();
        var jams = datw.getHours();
          var menit = datw.getMinutes();
            var detik = datw.getSeconds();
switch(hari) {
          case 0: hari = "Minggu"; break;
         case 1: hari = "Senin"; break;
       case 2: hari = "Selasa"; break;
     case 3: hari = "Rabu"; break;
   case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
case 6: hari = "Sabtu"; break;
        }
switch(bulan) {
case 0: bulan = "Januari"; break;
        case 1: bulan = "Februari"; break;
                 case 2: bulan = "Maret"; break;
                          case 3: bulan = "April"; break;
                                   case 4: bulan = "Mei"; break;
                                            case 5: bulan = "Juni"; break;
                                                     case 6: bulan = "Juli"; break;
                                                              case 7: bulan = "Agustus"; break;
                                                                       case 8: bulan = "September"; break;
                                                                                case 9: bulan = "Oktober"; break;
                                                                                         case 10: bulan = "November"; break;
                                                                                                  case 11: bulan = "Desember"; break;
        }
switch(jams){
case 0: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break;
case 1: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break;
case 2: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break;
case 3: jams = 'πππ₯ππ¦ππ­ πππ π’ π'; break;
case 4: jams = 'πππ₯ππ¦ππ­ πππ π’ π'; break; 
case 5: jams = 'πππ₯ππ¦ππ­ πππ π’ π'; break;
case 6: jams = 'πππ₯ππ¦ππ­ πππ π’ π'; break;
case 7: jams = 'πππ₯ππ¦ππ­ πππ π’ π'; break;
case 8: jams = 'πππ₯ππ¦ππ­ πππ π’ ποΈ'; break;
case 9: jams = 'πππ₯ππ¦ππ­ πππ π’ ποΈ'; break;
case 10: jams = 'πππ₯ππ¦ππ­ πππ π’ ποΈ'; break;
case 11: jams = 'πππ₯ππ¦ππ­ ππ’ππ§π  ποΈ'; break; 
case 12: jams = 'πππ₯ππ¦ππ­ ππ’ππ§π  ποΈ'; break;
case 13: jams = 'πππ₯ππ¦ππ­ ππ’ππ§π  ποΈ'; break;
case 14: jams = 'πππ₯ππ¦ππ­ ππ’ππ§π  ποΈ'; break;
case 15: jams = 'πππ₯ππ¦ππ­ ππ¨π«π π'; break;
case 16: jams = 'πππ₯ππ¦ππ­ ππ¨π«π π'; break;
case 17: jams = 'πππ₯ππ¦ππ­ ππ¨π«π π'; break;
case 18: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break; 
case 19: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break;
case 20: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break;
case 21: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break;
case 22: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break; 
case 23: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break;
			}
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
var tampilHari = "" + jams;

//Auto Ketik
await LexxyOFC.updatePresence(from, Presence.composing)

//βββββββββββββββ[ FAKE ]βββββββββββββββββ//

var fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${wib} *πΎππ*\n       ${wita} *πΎπππ*\n       ${wit} *πΎππ*`,
                 "h": `${wib} *πΎππ*\n       ${wita} *πΎπππ*\n       ${wit} *πΎππ*`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${wib} *πΎππ*\n       ${wita} *πΎπππ*\n       ${wit} *πΎππ*`,
                 'jpegThumbnail': fs.readFileSync('./Logo.jpg')
                        }
                       }
	                  } 
var flexx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `πππ₯π₯π¨ πππ€ ${jams}\nπππ§π ππ§ ππ?π©π πππ‘ππ π’π ππ`,
                 "title": ``,
                 'jpegThumbnail': fs.readFileSync("./img/loli.jpg"),
                        }
	                  } 
                     }   
var ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 9999999,
status: 1,
surface : 1,
message: `Β©π©π π³πππππΆπ­πͺ`, 
orderTitle: `Β©π©π π³πππππΆπ­πͺ`,
thumbnail: img2,
sellerJid: '0@s.whatsapp.net' 
}
}
}
    var fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6283871990243-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 99999,
          ptt: "true",
        },
      },
    };
  
//βββββββββββββββ[ BUTTON ]βββββββββββββββββ//
        let sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            LexxyOFC.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: mek
            })
        }
        let sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await LexxyOFC.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            LexxyOFC.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: mek,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return LexxyOFC.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        
//βββββββββββββββ[ REGISTER ]βββββββββββββββββ//      
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await LexxyOFC.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
LexxyOFC.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
		
// PEMBATASAN		            
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./storage/user.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
LexxyOFC.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `πππ₯π₯π¨ πππ€ ${jams} \nπππππ₯π?π¦ πππ§π ππ€π¬ππ¬ ππ¨π­ πππ£π’π\nπππ«π’ππ’π€ππ¬π’ πππ«π₯πππ’π‘ πππ‘π?π₯π? ππ πππ€`
const daftar2 = 'πΊπππππππ π²πππ π©πππππ π«π π©ππππ π²ππ'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `Verify`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//βββββββββββββββ[ CONNECTION 2 ]βββββββββββββββββ//
const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      LexxyOFC.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    
//Conektion
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//Auto Read
LexxyOFC.chatRead(from, "read")

//Menu
switch (command) {
case 'daftar':
case 'verify':
if (isRegistered) return reply('π²πππ πΊππππ π»ππππππππ π«π π«πππππππ')
namaUser = args.join(" ")
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
            fs.writeFileSync('./storage/user.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
const jancok =`β­ββ γ  πππ«π’ππ’πππ­π’π¨π§  γ β
β³ π΅πππ : *${pushname}*
β³ π΅ππππ : *@${sender.split('@')[0]}*
β³ πΊπππ : *${serialUser}*
β³ π·πππππππ: *${_registered.length}*
βββββββββββββββ`
jancok2 =`${fakeyoi}`
but = [
{buttonId:`${prefix}menu`, buttonText: {displayText: 'Β«β¨ MENU β©Β»'}, type: 1},
{buttonId:`${prefix}info`, buttonText: {displayText: 'Β«β¨ INFO β©Β»'}, type: 1}
]
sendButLocation(from, jancok, jancok2, img2, but)
hh = fs.readFileSync('./vn/gktw.mp3')
await LexxyOFC.sendMessage(from, hh, MessageType.audio, {qouted: mek, mimetype: 'audio/mp4', ptt:true})  
break
case 'tes':
tes =`ππ¨π­ πππ₯ππ‘ ππ§π₯π’π§π ππ’π₯ππ‘π€ππ§ πππ­π’π€ π¦ππ§π?`
reply(tes)
break
case 'status':
anu = await fetchJson(`https://api.mcsrvstat.us/bedrock/2/play.nikosmp.live`)
ini_txt =`*Status:* ${anu.online}\n`
ini_txt +=`*Online:* ${anu.players.online}\n`
ini_txt +=`*Map:* ${anu.map}\n`
ini_txt +=`*Gamemode:* Survival`
reply(ini_txt)
break
// RANDOM TEXT //
case 'quotes':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
get = anu.result
ini_txt =`Quotes : ${get.quote}\n\n`
ini_txt +=`By ${get.by}`
reply(ini_txt)
break
case 'quotesislami':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${lolkey}`)
ini_txt =`Quotes : ${anu.result}\n\n`
ini_txt +=`By Lexxy Official`
reply(ini_txt)
break
case 'quotesdilan':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
ini_txt =`Quotes : ${anu.result}\n\n`
ini_txt +=`By Lexxy Official`
reply(ini_txt)
break
case 'quotesanime':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
get = anu.result
ini_txt =`Quotes : ${get.quote}\n\n`
ini_txt +=`Character : ${get.character}\n`
ini_txt +=`Anime : ${get.anime}\n`
ini_txt +=`Episode : ${get.episode}`
reply(ini_txt)
break
case 'quotesimage':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`)
LexxyOFC.sendMessage(from, anu, image, {quoted: flexx, caption: 'Quotes By Lexxy Official' })
break
case 'faktaunik':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/faktaunik?apikey=${lolkey}`)
ini_txt =`Fakta : ${anu.result}\n\n`
ini_txt +=`By Lexxy Official`
reply(ini_txt)
break
case 'katabijak':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${lolkey}`)
reply(anu.result)
break
case 'pantun':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/pantun?apikey=${lolkey}`)
reply(anu.result)
break
case 'puisi':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/puisi?apikey=${lolkey}`)
reply(anu.result)
break
case 'katabucin1':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/bucin?apikey=${lolkey}`)
reply(anu.result)
break
case 'katabucin2':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/katabucin?apikey=${lolkey}`)
reply(anu.result)
break

//PEMBATAS EPHOTO MENU//
case 'luxurygold':
case 'watercolor':
case 'multicolor3d':
case 'wetglass':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalaxy':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
case 'cartoongravity':
case 'anonymhacker':
case 'mlwall':
case 'pubgmaskot':
case 'aovwall':
case 'logogaming':
case 'fpslogo':
case 'avatarlolnew':
case 'lolbanner':
case 'avatardota':
case 'juventusshirt':
case 'cutegravity':
case 'realvintage':
case 'codwarzone':
case 'valorantbanner':
if (args.length == 0) return reply(`π»πππ π΅ππ π΄πππ π²ππ?\nπͺπππππ : ${prefix + command} Naruto`)
bo = args.join(" ")
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${bo}`)
LexxyOFC.sendMessage(from, anu, image, {quoted: mek, caption: 'Nih Kak Hasilnya ^_^' })
break
 //PEMBATAS EPHOTO MENU//
case 'tiktok':
case 'tiktokdl':
case 'tiktoknowm':
if (args.length == 0) return reply(`π»πππ π΅ππ π΄πππ π²ππ?\nπͺπππππ : ${prefix + command} Dj Gratata`)
bo = args.join(" ")
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${bo}`).catch(e => {
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break

// MENU MAKER
case 'hartatahta':
case 'naruto':
case 'bneon':
case 'matrix':
case 'breakwall':
case 'gneon':
case 'dropwater':
case 'flowertext':
case 'crosslogo':
case 'silktext':
case 'flametext':
case 'glowtext':
case 'smoketext':
case 'skytext':
case 'cslogo':
case 'lithgtext':
case 'crismes':
case 'tfire':
case 'sandw':
case 'epep':
case 'text3dbox':
case 'logobp':
case 'leavest':
case 'thundertext':
case 'tlight':
case 'nulis':
if (args.length == 0) return reply(`π»πππ π΅ππ π΄πππ π²ππ?\nπͺπππππ : ${prefix + command} Naruto`)
bo = args.join(" ")
reply(mess.wait)
res = await getBuffer(`https://api.zeks.me/api/${command}?apikey=${zeksApi}&text=${bo}`)
LexxyOFC.sendMessage(from, res, image, {quoted: flexx, caption: 'Nih Kak Hasilnya ^_^' })
break
case 'wolflogo':
case 'pubglogo':
case 'snowwrite':
case 'watercolour':
case 'logoaveng':
case 'phlogo':
case 'marvellogo':
case 'gtext':
if (args.length == 0) return reply(`π»πππ π΅ππ π΄πππ π²ππ?\nπͺπππππ : ${prefix + command} Naruto`)
txt1 = args[0]
txt2 = args[0]
reply(mess.wait)
wll = await getBuffer(`https://api.zeks.me/api/${command}?apikey=${zeksApi}&text1=${txt1}&text2=${txt2}`)
LexxyOFC.sendMessage(from, wll, image, {quoted: flexx, caption: 'Nih Kak Hasilnya ^_^' })
break
case 'artinama':
if (args.length == 0) return reply(`Nama Nya Mana Kak?\nπͺπππππ : ${prefix + command} Haikal`)
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${lolkey}&nama=${bo}`)
reply(ini.result)
break
case 'blackpink':
case 'neon':
case 'greenneon':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
case 'magma':
case 'impressiveglitch':
case 'harrypotter':
case 'foggywindow':
case 'watercolor':
case 'wonderfulgraffiti':
if (args.length == 0) return reply(`π»πππ π΅ππ π΄πππ π²ππ?\nπͺπππππ : ${prefix + command} Naruto`)
bo = args.join(" ")
reply(mess.wait)
blck = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${bo}`)
LexxyOFC.sendMessage(from, blck, image, {quoted: flexx, caption: 'Nih Kak Hasilnya ^_^' })
break
case 'caklontong':
              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/caklontong?apikey=${lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              LexxyOFC.sendMessage(from, '*+* ```Caklontong```\n\n *soal* :'+pertanyaan+'\n *kisiΒ²* :'+kisi_kisi, text, { quoted: ftrol}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
case 'tebakgambar':
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${lolkey}`)
get_result = get_result.result
ini_image = get_result.image
jawaban = get_result.answer
ini_buffer = await getBuffer(ini_image)
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
buff = await getBuffer(ini_image)

LexxyOFC.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk : Gak Ada\nWaktu : 30 Detik' }).then(() => {
  tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
  fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
})
await sleep(30000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
  console.log(color("Jawaban: " + jawaban))
  titid = "*Jawaban*: " + jawaban
  sendButton(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
  {
 buttonId: `${prefix}tebakgambar`,
 buttonText: {
displayText: `β¬‘ NEXT `,
 },
 type: 1,
  },]);

  delete tebakgambar[sender.split('@')[0]]
  fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
}
gameAdd(sender, glimit)
break
case 'pay':
reply(mess.wait)
dns = fs.readFileSync('./donasi.jpg')
ini_txt =`β­ββͺ *PAYMENT*
β  βββββββββββ
ββ β *BRI*
ββ β 584001037662537
ββ β *DANA*
ββ β 081392717132
ββ β *Qris*
ββ β https://bit.ly/3E4am96
βββββββββββββββββ`
LexxyOFC.sendMessage(from, dns, image, {quoted: flexx, caption: ini_txt })
break
case 'bot':
res = await LexxyOFC.prepareMessageFromContent(from,{
"listMessage": {
"title": 'γ π°π΅π­πΆ πΌπΊπ¬πΉ γ',
"description": `πππ¦π : ${pushname}
ππ¨π¦π¨π« : @${sender.split('@')[0]}

*Silahkan klik tombol di bawah untuk menampilkan menu*βββ`,
"buttonText": "ππππ",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `${hari} - ${tanggal} - ${bulan} - ${tahun}`,
    "rows": [ 
       {
           "title": "γ  FREE FIRE  γ ",
           "rowId": `${prefix}soundmenu`
           },
	       {
           "title": "γ  HIGGS DOMINO  γ",
           "rowId": `${prefix}funmenu`
           },
	       {
           "title": "γ  FUN MENU  γ",
           "rowId": `${prefix}simplemenu`
           },
	       {
	       "title": "γ  PULSA TELKOMSEL  γ",
           "rowId": `${prefix}gamemenu`
           },
           {
	       "title": "γ  MOBILE LEGENDS  γ",
           "rowId": `${prefix}animemenu`
           },
           {
           "title": "γ  FORMAT ORDER  γ",
           "rowId": `${prefix}format`
           },
           {
           "title": "γ  PAYMENT  γ",
           "rowId": `${prefix}pay`
           },
           {
           "title": "γ	OWNER	γ",
           "rowId": `${prefix}owner`
           },
	       {
           "title": "γ  REQUEST MENU  γ",
           "rowId": `${prefix}web`
           },
           {
           "title": "γ	INFO BOT	γ",
           "rowId": `${prefix}info`
           }
        ]
      }
    ]
  }
 }, {quoted: flexx})
 LexxyOFC.relayWAMessage(res)
 break
case 'gamemenu':
case 'update':
gme =`β­ββ β *Pulsa Telkomsel* β β
ββ Pulsa 20 IDR 20.457
ββ Pulsa 25 IDR 24.497
ββ Pulsa 30 IDR 28.552
ββ Pulsa 35 IDR 32.592
ββ Pulsa 40 IDR 36.632
ββ Pulsa 45 IDR 40.672
ββ Pulsa 50 IDR 45.520
ββ Pulsa 55 IDR 50.060
ββ Pulsa 60 IDR 54.100
ββ Pulsa 65 IDR 58.140
ββ Pulsa 70 IDR 62.180
ββ Pulsa 75 IDR 66.620
ββ Pulsa 80 IDR 70.760
ββ Pulsa 85 IDR 74.800
ββ Pulsa 90 IDR 80.000
ββ Pulsa 95 IDR 83.880
ββ Pulsa 100 IDR 90.000
ββ Pulsa 150 IDR 140.000
ββ Pulsa 200 IDR 180.000
β_______________________
ββ harga bisa berubah setiap waktu,
ββ jadi perhatikan harga dulu
ββ sebelum membeli terimakasih (:
ββ βββββββββββββ
ββ Ketik #format untuk cara pembayaran
ββ ketik #pay untuk pembayaran 
βββββββββββββββ`
reply(gme)
break
case 'textpromenu':
txtpro =`β­ββ β πππ±π­ππ«π¨ πππ§π? β β
ββ ${prefix}π£π­π’π€π¬π±πͺπ―π¬ 
ββ ${prefix}π―π¦π°π― 
ββ ${prefix}π¨π³π¦π¦π―π―π¦π°π― 
ββ ${prefix}π§πΆπ΅πΆπ³π¦π―π¦π°π― 
ββ ${prefix}π΄π’π―π₯πΈπ³πͺπ΅πͺπ―π¨ 
ββ ${prefix}π΄π’π―π₯π΄πΆπ?π?π¦π³ 
ββ ${prefix}π΄π’π―π₯π¦π―π¨π³π’π·π¦π₯ 
ββ ${prefix}π?π¦π΅π’π­π₯π’π³π¬ 
ββ ${prefix}π―π¦π°π―π­πͺπ¨π©π΅ 
ββ ${prefix}π©π°π­π°π¨π³π’π±π©πͺπ€ 
ββ ${prefix}π΅π¦πΉπ΅1917 
ββ ${prefix}π?πͺπ―πͺπ°π― 
ββ ${prefix}π₯π¦π­πΆπΉπ¦π΄πͺπ­π·π¦π³ 
ββ ${prefix}π―π¦πΈπΊπ¦π’π³π€π’π³π₯ 
ββ ${prefix}π£π­π°π°π₯π§π³π°π΄π΅π¦π₯ 
ββ ${prefix}π©π’π­π­π°πΈπ¦π¦π― 
ββ ${prefix}π«π°π¬π¦π³π­π°π¨π° 
ββ ${prefix}π§πͺπ³π¦πΈπ°π³π¬π΄π±π’π³π¬π­π¦ 
ββ ${prefix}π―π’π΅πΆπ³π¦π­π¦π’π·π¦π΄ 
ββ ${prefix}π£π°π¬π¦π© 
ββ ${prefix}π΅π°πΉπͺπ€ 
ββ ${prefix}π΄π΅π³π’πΈπ£π¦π³π³πΊ 
ββ ${prefix}π£π°πΉ3π₯ 
ββ ${prefix}π³π°π’π₯πΈπ’π³π―πͺπ―π¨ 
ββ ${prefix}π£π³π¦π’π¬πΈπ’π­π­ 
ββ ${prefix}πͺπ€π¦π€π°π­π₯ 
ββ ${prefix}π­πΆπΉπΆπ³πΊ 
ββ ${prefix}π€π­π°πΆπ₯ 
ββ ${prefix}π΄πΆπ?π?π¦π³π΄π’π―π₯ 
ββ ${prefix}π©π°π³π³π°π³π£π­π°π°π₯ 
ββ ${prefix}π΅π©πΆπ―π₯π¦π³ 
ββ ${prefix}π?π’π¨π?π’ 
ββ ${prefix}πͺπ?π±π³π¦π΄π΄πͺπ·π¦π¨π­πͺπ΅π€π© 
ββ ${prefix}π©π’π³π³πΊπ±π°π΅π΅π¦π³ 
ββ ${prefix}π§π°π¨π¨πΊπΈπͺπ―π₯π°πΈ
ββ ${prefix}πΈπ’π΅π¦π³π€π°π­π°π³
ββ ${prefix}πΈπ°π―π₯π¦π³π§πΆπ­π¨π³π’π§π§πͺπ΅πͺ
βββββββββββββββ`
reply(txtpro)
break
case 'format':
mker =`β­ββ β *FORMAT ORDER* β β
β1. Pilih nominal transaksi
β2. Transfer Ke Admin sesuai harga
β3. *Format order = ID.NICK.JUMLAH*
β4. Khusus Mobile Legens
β	Sertakan dalam kurung
β5. Cth:
β	 1841449206.EVOS.355 diamond FF
β6. Kirim bukti pembayaran beserta
β	format order
βββββββββββββββ`
reply(mker)
break
case 'ephotomenu':
eph =`β­ββ β ππ©π‘π¨π­π¨ πππ§π? β β
ββ ${prefix}π­πΆπΉπΆπ³πΊπ¨π°π­π₯ 
ββ ${prefix}πΈπ’π΅π¦π³π€π°π­π°π³ 
ββ ${prefix}π?πΆπ­π΅πͺπ€π°π­π°π³3π₯ 
ββ ${prefix}πΈπ¦π΅π¨π­π’π΄π΄
ββ ${prefix}π¨π’π­π’πΉπΊπΈπ’π­π­π±π’π±π¦π³ 
ββ ${prefix}π­πͺπ¨π©π΅π΅π¦πΉπ΅ 
ββ ${prefix}π£π¦π’πΆπ΅πͺπ§πΆπ­π§π­π°πΈπ¦π³ 
ββ ${prefix}π±πΆπ±π±πΊπ€πΆπ΅π¦ 
ββ ${prefix}π³π°πΊπ’π­π΅π¦πΉπ΅ 
ββ ${prefix}π©π¦π’π³π΅π΄π©π’π±π¦π₯ 
ββ ${prefix}π£πͺπ³π΅π©π₯π’πΊπ€π’π¬π¦ 
ββ ${prefix}π¨π’π­π’πΉπΊπ΄π΅πΊπ­π¦ 
ββ ${prefix}π©π°π­π°π¨π³π’π?3π₯ 
ββ ${prefix}π¨π³π¦π¦π―π―π¦π°π― 
ββ ${prefix}π¨π­π°π΄π΄πΊπ€π©π³π°π?π¦ 
ββ ${prefix}π¨π³π¦π¦π―π£πΆπ΄π© 
ββ ${prefix}π?π¦π΅π’π­π­π°π¨π° 
ββ ${prefix}π―π°π¦π­π΅π¦πΉπ΅
ββ ${prefix}π¨π­πͺπ΅π΅π¦π³π¨π°π­π₯ 
ββ ${prefix}π΅π¦πΉπ΅π€π’π¬π¦ 
ββ ${prefix}π΄π΅π’π³π΄π―πͺπ¨π©π΅ 
ββ ${prefix}πΈπ°π°π₯π¦π―3π₯ 
ββ ${prefix}π΅π¦πΉπ΅π£πΊπ―π’π?π¦ 
ββ ${prefix}πΈπ³πͺπ΅π¦π¨π’π­π’πΉπΊ 
ββ ${prefix}π΄π―π°πΈ3π₯ 
ββ ${prefix}π£πͺπ³π΅π©π₯π’πΊπ₯π’πΊ 
ββ ${prefix}π¨π°π­π₯π±π­π’πΊπ£πΆπ΅π΅π°π― 
ββ ${prefix}π΄πͺπ­π·π¦π³π±π­π’πΊπ£πΆπ΅π΅π°π―
ββ ${prefix}π§π³π¦π¦π§πͺπ³π¦ 
ββ ${prefix}π€π’π³π΅π°π°π―π¨π³π’π·πͺπ΅πΊ 
ββ ${prefix}π’π―π°π―πΊπ?π©π’π€π¬π¦π³ 
ββ ${prefix}π?π­πΈπ’π­π­ 
ββ ${prefix}π±πΆπ£π¨π?π’π΄π¬π°π΅ 
ββ ${prefix}π’π°π·πΈπ’π­π­ 
ββ ${prefix}π­π°π¨π°π¨π’π?πͺπ―π¨ 
ββ ${prefix}π§π±π΄π­π°π¨π° 
ββ ${prefix}π’π·π’π΅π’π³π­π°π­π―π¦πΈ 
ββ ${prefix}π­π°π­π£π’π―π―π¦π³ 
ββ ${prefix}π’π·π’π΅π’π³π₯π°π΅π’ 
ββ ${prefix}π«πΆπ·π¦π―π΅πΆπ΄π΄π©πͺπ³π΅ 
ββ ${prefix}π€πΆπ΅π¦π¨π³π’π·πͺπ΅πΊ 
ββ ${prefix}π³π¦π’π­π·πͺπ―π΅π’π¨π¦ 
ββ ${prefix}π€π°π₯πΈπ’π³π»π°π―π¦ 
ββ ${prefix}π·π’π­π°π³π’π―π΅π£π’π―π―π¦π³
βββββββββββββββ`
reply(eph)
break
case 'randomtext':
txttt =`β­ββ β πππ§ππ¨π¦ πππ±π­ β β
ββ ${prefix}π²πΆπ°π΅π¦π΄
ββ ${prefix}π¬π’π΅π’π£πͺπ«π’π¬
ββ ${prefix}π±π’π―π΅πΆπ―
ββ ${prefix}π§π’π¬π΅π’πΆπ―πͺπ¬
ββ ${prefix}π±πΆπͺπ΄πͺ
ββ ${prefix}π¬π’π΅π’π£πΆπ€πͺπ―1
ββ ${prefix}π¬π’π΅π’π£πΆπ€πͺπ―2
ββ ${prefix}π²πΆπ°π΅π¦π΄πͺπ΄π­π’π?πͺ
ββ ${prefix}π²πΆπ°π΅π¦π΄π₯πͺπ­π’π―
ββ ${prefix}π²πΆπ°π΅π¦π΄π’π―πͺπ?π¦
ββ ${prefix}π²πΆπ°π΅π¦π΄πͺπ?π’π¨π¦
βββββββββββββββ`
reply(txttt)
break
case 'yoii':
	menunyai = `Hai Kak *${pushname}* ${jams}
	
*ββββββ" INFORMASI "ββββββ*
*ββββββ" LIST MENU "ββββββ*
*1>* ${prefix}owner
*2>* ${prefix}runtime
*3>* ${prefix}sticker
*4>* ${prefix}toimg
*5>* ${prefix}tourl
*6>* ${prefix}play
*7>* ${prefix}ytmp3
*8>* ${prefix}ytmp4
*9>* ${prefix}tiktok
*10>* ${prefix}faktaunik
*11>* ${prefix}katabijak
*12>* ${prefix}pantun
*13>* ${prefix}bucin
*14>* ${prefix}randomnama
*15>* ${prefix}welcome
*16>* ${prefix}antilink
*17>* ${prefix}asmaulhusna
*18>* ${prefix}jadwalsholat
*19>* ${prefix}quotes
*21>* ${prefix}cerpen
*22>* ${prefix}tagall
*23>* ${prefix}hidetag
*24>* ${prefix}xnxxsearch
*25>* ${prefix}xnxx
*26>* ${prefix}quotesanime
*27>* ${prefix}nulis
*28>* ${prefix}nuliskanan
*29>* ${prefix}nuliskiri
*30>* ${prefix}foliokanan
*31>* ${prefix}foliokiri
*32>* ${prefix}ssweb
*33>* ${prefix}cogan
*34>* ${prefix}cecan
*35>* ${prefix}cecanvietnam
*36>* ${prefix}cecanrandom
*37>* ${prefix}hijaber
*38>* ${prefix}santuy
*39>* ${prefix}ukhti
*40>* ${prefix}bocil
*41>* ${prefix}ghea
*42>* ${prefix}rika
*43>* ${prefix}cecanmalaysia
*44>* ${prefix}cecankorea
*45>* ${prefix}cecanthailand
*46>* ${prefix}cecanjapan
*47>* ${prefix}cecanindonesia
	`
var imgs = await LexxyOFC.prepareMessage('0@c.us', img2, image, { thumbnail: img2 })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await LexxyOFC.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `ALL MENU`,
                        "description": menunyai,
                        "footerText": `γ‘KiriTo OfficialΜ΅`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "100000000",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "35000000",
                        "retailerId": `KiriTo OfficialΓ`,
                        "url": "OWNER : https://wa.me/6281391717132\nYT "
                    },
                    "businessOwnerJid": "6281392717132@s.whatsapp.net",
                }
            }, { quoted: fgi, mimetype: 'image/jpeg' })
            LexxyOFC.relayWAMessage(ctlg)
            break
case 'nekopoimenu':
ne =`β­ββ β πππ€π¨π©π¨π’ πππ§π? β β
ββ ${prefix}π―π¦π¬π°1 
ββ ${prefix}π―π¦π¬π°2 
ββ ${prefix}π―π¦π¬π°3 
ββ ${prefix}π―π¦π¬π°4 
ββ ${prefix}π―π¦π¬π°5 
ββ ${prefix}π―π¦π¬π°6 
ββ ${prefix}π―π¦π¬π°7 
ββ ${prefix}π―π¦π¬π°8 
ββ ${prefix}π―π¦π¬π°9 
ββ ${prefix}π₯π°π΄π’1 
ββ ${prefix}π₯π°π΄π’2 
ββ ${prefix}π₯π°π΄π’3 
ββ ${prefix}π₯π°π΄π’4 
ββ ${prefix}π₯π°π΄π’5 
ββ ${prefix}π₯π°π΄π’6 
ββ ${prefix}π₯π°π΄π’7 
ββ ${prefix}π₯π°π΄π’8 
ββ ${prefix}π₯π°π΄π’9 
ββ ${prefix}π₯π°π΄π’10 
ββ ${prefix}π₯π°π΄π’11 
ββ ${prefix}π₯π°π΄π’12
ββ ${prefix}π₯π°π΄π’13 
ββ ${prefix}π₯π°π΄π’14 
ββ ${prefix}π₯π°π΄π’15
βββββββββββββββ`
reply(ne)
break
case 'animemenu':
an =`β­ββ β *Mobile Legend* β β
ββ ML 3 IDR 2.110
ββ ML 12 IDR 4.070
ββ ML 28 IDR 8.615
ββ ML 36 IDR 10.665
ββ ML 59 IDR 16.720
ββ ML 74 IDR 21.270
ββ ML 85 IDR 23.020
ββ ML 170 IDR 46.035
ββ ML 185 IDR 51.485
ββ ML 222 IDR 61.635
ββ ML 296 IDR 81.635
ββ ML 344 IDR 83.880
ββ ML 370 IDR 101.635
ββ ML 568 IDR 152.035
ββ ML 875 IDR 201.085
ββ ML 1159 IDR 302.935
ββ ML 2010 IDR 503.635
ββ ML 4830 IDR 1.260.000
ββ βββββββββββββ
ββ harga bisa berubah setiap waktu,
ββ jadi perhatikan harga dulu
ββ sebelum membeli terimakasih (:
ββ βββββββββββββ
ββ Ketik #format untuk cara pembayaran
ββ ketik #pay untuk pembayaran 
βββββββββββββββ`
reply(an)
break
case 'web':
reply(`*REQUEST MENU* \n\nAnda bisa request untuk di tambahkan di daftar menu hubungi owner untuk menambahkan wa.me/6281392717132_\n\nhttps://kiritocell.blogspot.com`)
break
case 'simplemenu':
smp =`β­ββ γ *FUN MENU* γ β
ββ ${prefix}π΄π΅πͺπ€π¬π¦π³ (buat stiker)
ββ ${prefix}π±π­π’πΊ (download lagu)
ββ ${prefix}π΅πͺπ¬π΅π°π¬ (download tiktok)
ββ ${prefix}tagme
βββββββββββββββ`
reply(smp)
break
case 'soundmenu':
snd =`β­ββ β FREE FIRE β β
ββ 5 DIAMOND IDR 1.000
ββ 10 DIAMOND IDR 2.000
ββ 12 DIAMOND IDR 2.100
ββ 20 DIAMOND IDR 3.000
ββ 25 DIAMOND IDR 4.000
ββ 30 DIAMOND IDR 5.000
ββ 40 DIAMOND IDR 6.000
ββ 50 DIAMOND IDR 7.000
ββ 70 DIAMOND IDR 10.000
ββ 75 DIAMOND IDR 11.000
ββ 80 DIAMOND IDR 12.000
ββ 90 DIAMOND IDR 13.000
ββ 100 DIAMOND IDR 14.000
ββ 120 DIAMOND IDR 16.000
ββ 140 DIAMOND IDR 19.000
ββ 150 DIAMOND IDR 20.500
ββ 160 DIAMOND IDR 21.500
ββ 190 DIAMOND IDR 25.000
ββ 200 DIAMOND IDR 27.500
ββ 210 DIAMOND IDR 28.000
ββ 280 DIAMOND IDR 37.000
ββ 355 DIAMOND IDR 46.000
ββ 375 DIAMOND IDR 48.500
ββ 405 DIAMOND IDR 52.500
ββ 425 DIAMOND IDR 55.000
ββ 475 DIAMOND IDR 61.000
ββ 500 DIAMOND IDR 65.000
ββ 510 DIAMOND IDR 67.000
ββ 545 DIAMOND IDR 74.000
ββ 565 DIAMOND IDR 75.000
ββ 635 DIAMOND IDR 83.000
ββ 720 DIAMOND IDR 91.000
ββ ββββββββββββββββββββ
ββ MM IDR 29.000
ββ MB IDR 139.000
ββ ββββββββββββββββββββ
ββ harga bisa berubah setiap waktu,
ββ jadi perhatikan harga dulu
ββ sebelum membeli terimakasih (:
ββ ββββββββββββββββββββ
ββ Ketik #format untuk cara pembayaran
ββ Ketik #pay untuk pembayaran 
βββββββββββββββββββββββ`
reply(snd)
break
case 'funmenu':
case 'updatechip':
fun =`β­ββ β *HIGGS DOMINO* β β
ββ 1M IDR 500
ββ 2M IDR 1.000
ββ 3M IDR 1.745
ββ 4M IDR 1.960
ββ 5M IDR 2.035
ββ 6M IDR 2.555
ββ 7M IDR 2.900
ββ 30M IDR 5.585
ββ 60M IDR 6.885
ββ 120M IDR 13.135
ββ 200M IDR 18.885
ββ 400M IDR 35.885
ββ 600M IDR 56.135
ββ 1B IDR 67.380
β________________________________
β~HIGGS DOMINO CHIP UNGGU~
βharga bisa berubah setiap waktu,
βjadi perhatikan harga dulu
βsebelum membeli terimakasih (:
βββββββββββββββββββββ
βKetik #format untuk cara pembayaran
βKetik #pay untuk pembayaran 
βββββββββββββββ`
reply(fun)
break

    //βββββββββββββββ[ Neko Menu  ]βββββββββββββββββ//        
                 case 'neko1':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko2':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko3':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko4':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko5':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko6':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko7':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko8':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko9':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5b+poi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break                
case 'character':
 
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Name : ${get_result.name.full}\n`
ini_txt += `Native : ${get_result.name.native}\n`
ini_txt += `Favorites : ${get_result.favourites}\n`
ini_txt += `Media : \n`
ini_media = get_result.media.nodes
for (var x of ini_media) {
ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
}
ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
thumbnail = await getBuffer(get_result.image.large)
await LexxyOFC.sendMessage(from, thumbnail, image, { quoted: flexx, caption: ini_txt })
break
case 'manga':
 
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Chapters : ${get_result.chapters}\n`
ini_txt += `Volume : ${get_result.volumes}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await LexxyOFC.sendMessage(from, thumbnail, image, { quoted: flexx, caption: ini_txt })
break
case 'anime':
 
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Episodes : ${get_result.episodes}\n`
ini_txt += `Duration : ${get_result.duration} mins.\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Season : ${get_result.season}\n`
ini_txt += `Season Year : ${get_result.seasonYear}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await LexxyOFC.sendMessage(from, thumbnail, image, { quoted: flexx, caption: ini_txt })
break
case 'kusonimesearch':
 
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Genre : ${get_result.genre}\n`
ini_txt += `Seasons : ${get_result.seasons}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Total Episode : ${get_result.total_episode}\n`
ini_txt += `Score : ${get_result.score}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Released On : ${get_result.released_on}\n`
ini_txt += `Desc : ${get_result.desc}\n`
link_dl = get_result.link_dl
for (var x in link_dl) {
ini_txt += `\n${x}\n`
for (var y in link_dl[x]) {
ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
ini_buffer = await getBuffer(get_result.thumbnail)
await LexxyOFC.sendMessage(from, ini_buffer, image, { quoted: flexx, caption: ini_txt })
break
case 'otakudesusearch':
 
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Judul : ${get_result.judul}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Episode : ${get_result.episodes}\n`
ini_txt += `Aired : ${get_result.aired}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Genre : ${get_result.genres}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Studios : ${get_result.status}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Credit : ${get_result.credit}\n`
get_link = get_result.link_dl
for (var x in get_link) {
ini_txt += `\n\n*${get_link[x].title}*\n`
for (var y in get_link[x].link_dl) {
ini_info = get_link[x].link_dl[y]
ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
ini_txt += `\`\`\`Link : \`\`\`\n`
down_link = ini_info.link_dl
for (var z in down_link) {
ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
reply(ini_txt)
break
case 'nhentaisearch':
 
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = "Result : \n"
for (var x of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${x.title_english}\n`
ini_txt += `Title Japanese : ${x.title_japanese}\n`
ini_txt += `Native : ${x.title_native}\n`
ini_txt += `Upload : ${x.date_upload}\n`
ini_txt += `Page : ${x.page}\n`
ini_txt += `Favourite : ${x.favourite}\n\n`
}
reply(ini_txt)
break
case 'nekopoisearch':
 
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
reply(ini_txt)
break
        //βββββββββββββββ[ Dosa Menu  ]βββββββββββββββββ//
case 'dosa1':				 

qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })

break

case 'dosa2':

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })

break

case 'dosa3':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    

break

case 'dosa4':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   

break

case 'dosa5':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   

break

case 'dosa6':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   

break

case 'dosa7':

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   

break

case 'dosa8':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   

break

case 'dosa10':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   

break

case 'dosa11':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   

break

case 'dosa12':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   

break

case 'dosa13':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   

break
case 'dosa14':	
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
break
case 'dosa15':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
break

//MKASIH
case 'darkjoke':
case 'meme':
buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`)
await LexxyOFC.sendMessage(from, buff, image, {qouted: flexx, caption: 'Nih Kak'})  
break
case 'rate':
rate = body.slice(1)
const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: ftrol })
break
case 'apakah':
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
const kah = apa[Math.floor(Math.random() * apa.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: ftrol })
break
case 'kapankah':
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: ftrol })
break
case 'bisakah':
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Mimpi kah?','yakin bisa?']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: ftrol })
break
case 'caripesan':
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await LexxyOFC.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
LexxyOFC.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
case 'slot':
case 'slots':
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
LexxyOFC.sendMessage(from, `[  π° | SLOTS ]\n-----------------\nπ : π : π\n${somtoy}<=====\nπ : π : π\n[  π° | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : π : π : π<=====`, MessageType.text, { quoted: flexx })
break
case 'suit':
case 'suits':
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
if (args[0] === 'gunting' ) {
gunting = [
"Kamu *Gunting*\nAku *Kertas*\nKamu Menang π",
"Kamu *Gunting*\nAku *Batu*\nKamu Kalah π",
"Kamu *Gunting*\nAku *Gunting*\nKita Seri π"
]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = [
"Kamu *Kertas*\nAku *Batu*\nKamu Menang π",
"Kamu *Kertas*\nAku *Gunting*\nKamu Kalah π",
"Kamu *Kertas*\nAku *Kertas*\nKita Seri π"
]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = [
"Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
"Kamu *Batu*\nAku *Kertas*\nKamu Kalah π",
"Kamu *Batu*\nAku *Batu*\nKita Seri π"
]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih gunting/batu/kertas')
}
break
case 'tag':
if (args.length < 1) return reply(`Nomernya Mana ?\nContoh ${prefix}tag 62xnxx`)
var nomqm = `${body.slice(5)}@s.whatsapp.net`
tagq = `@${nomqm.split('@')[0]}` 
LexxyOFC.sendMessage(from, tagq, text, { quoted: flexx, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'tagme':
var nomqm = mek.participant
tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
LexxyOFC.sendMessage(from, tagu, text, { quoted: flexx, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'readmore':
case 'more':
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
if (!q.includes('|')) return  reply(mess.error.api)
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
reply( text1 + readmore + text2)
break
case 'fitnahpc':
 if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
var gh = body.slice(10)
var parti = gh.split("|")[0];
var targetq = gh.split("|")[1];
var bot = gh.split("|")[2];
LexxyOFC.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
break
case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'sound62':
      case 'sound63':
      case 'sound64':
      case 'sound65':
      case 'sound66':
      case 'sound67':
      case 'sound68':
      case 'sound69':
      case 'sound70':
      case 'sound70':
      omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
      LexxyOFC.sendMessage(from, omkeh, MessageType.audio, { quoted: fvn, mimetype: 'audio/mp4', ptt: true })
      break
      case 'sound71':
      case 'sound71':
      case 'sound72':
      case 'sound73':
      case 'sound74':
      case 'sound75':
      omkeh = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
      LexxyOFC.sendMessage(from, omkeh, MessageType.audio, { quoted: fvn, mimetype: 'audio/mp4', ptt: true })
          break      
case 'ssweb':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh: ${prefix + command} Lexxy Gantenk`)
ini_url = args.join(" ")
reply(mess.wait)
getBuffer(`https://ziy.herokuapp.com/api/ssweb?apikey=${xziyApi}&url=${ini_url}`).then((hasil) => {
LexxyOFC.sendMessage(from, hasil, image, { thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA Subscribe Lexxy Official`, quoted : flexx })
})
break
case 'nulis':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} Lexxy Official`)
bo = args.join(" ")
reply(mess.wait)
nul = await getBuffer(`https://ziy.herokuapp.com/api/nulis?text=${bo}&apikey=${xziyApi}`)
LexxyOFC.sendMessage(from, nul, image, { quoted: mek, caption: 'Nih Kak Hasilnya' })
break
case 'bold':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} Lexxy`)
bo = args.join(" ")
reply(mess.wait)
bl = await getBuffer(`http://zekais-api.herokuapp.com/oxy/bold?text=${bo}&apikey=${zekais}`)
LexxyOFC.sendMessage(from, bl, MessageType.video,{mimetype:'video/mp4',quoted: mek, caption: 'ππβ π΅ππ πππππ ππ¦π'})
break
case 'poly':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} Lexxy`)
bo = args.join(" ")
reply(mess.wait)
pl = await getBuffer(`http://zekais-api.herokuapp.com/oxy/poly?text=${bo}&apikey=${zekais}`)
LexxyOFC.sendMessage(from, pl, MessageType.video,{mimetype:'video/mp4',quoted: mek, caption: 'ππβ π΅ππ πππππ ππ¦π'})
break
case 'cerpen':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/cerpen?apikey=${zekais}`)
ini_txt =`Judul :${get.title}\n`
ini_txt +=`Pengarang : ${get.pengarang}\n`
ini_txt +=`Category : ${get.category}\n\n`
ini_txt +=`Cerita : ${get.post}`
reply(ini_txt)
break
case 'memes':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/dankmemes?apikey=${zekais}`)
ini = await getBuffer(`${get.result}`)
LexxyOFC.sendMessage(from, ini, image, { quoted: mek })
break
case 'bucin':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/bucin?apikey=${zekais}`)
ini_txt =`*${get.result}*`
reply(ini_txt)
break
case 'bijak':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/bijak?apikey=${zekais}`)
ini_txt =`*${get.result}*`
reply(ini_txt)
break
case 'fakta':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/fakta?apikey=${zekais}`)
ini_txt =`*${get.result}*`
reply(ini_txt)
break
case 'quotesimg':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/quotepic?apikey=${zekais}`)
ini = await getBuffer(`${get.quotes}`)
LexxyOFC.sendMessage(from, ini, image, { quoted: mek, caption: 'πΈπππππ π©π π³ππππ πΆπππππππ' })
break
case 'quotesid':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/quotes?apikey=${zekais}`)
ini_txt =`*${get.quotes}*\n\n`
ini_txt +=`*Author : @${get.author}*`
reply(ini_txt)
break
case 'ttmp4':
if (!isRegistered) return reply(dftr1)
url = args.join(" ")
reply(mess.wait)
get = await fetchJson(`https://mirip-lolhuman.herokuapp.com/docs/download/tiktok?url=${url}&apikey=Alphabot`)
ini = await getBuffer(get.result.nowm)

LexxyOFC.sendMessage(from, ini, MessageType.video,{mimetype:'video/mp4',quoted: flexx})
break
case 'ttmp3':
if (!isRegistered) return reply(dftr1)
ttmp = args.join(" ")
reply(mess.wait)
get = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ttmp}`)

LexxyOFC.sendMessage(from, get, MessageType.audio,{mimetype:'audio/m4a',quoted: flexx})
break 
case 'sc':
case 'infosc':
case 'info':
scnya = `βββ€ γ ππππ π½ππ γ
β― πππ¦π : ${botName}
β― ππ°π§ππ« : ${ownerName}
β― ππ«πππ’π± : γ ππ?π₯π­π’ ππ«πππ’π± γ
β― ππ₯ππ­ππ¨π«π¦ : ππ§ππ«π¨π’π
β― ππ’π : πππ’π₯ππ²π¬
β― ππ²π©π : ππ¨ππππ
β― ππ?π§π­π’π¦π : ${runtime(process.uptime())}
ββββββββββββββ`
buttons = [
{buttonId:`${prefix}bot`, buttonText: {displayText: '</BACK MENU'}, type: 1}
]
const info = {
    contentText: `${scnya}`,
    footerText: ``,
    buttons: buttons,
    headerType: 1
}
await LexxyOFC.sendMessage(from, info, MessageType.buttonsMessage, {quoted: mek})
hh = fs.readFileSync('./vn/gktw.mp3')
await LexxyOFC.sendMessage(from, hh, MessageType.audio, {qouted: flexx, mimetype: 'audio/mp4', ptt:true})  
break
case 'playmp3':
case 'play':
if (args.length < 1) return reply('Masukin Judul Lagunya')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
β’ *Judul :* ${res.all[0].title}
β’ *ID Video :* ${res.all[0].videoId}
β’ *Diupload Pada :* ${res.all[0].ago}
β’ *Views :* ${res.all[0].views}
β’ *Durasi :* ${res.all[0].timestamp}
β’ *Channel :* ${res.all[0].author.name}
β’ *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
var tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
β’ *Judul :* ${res.all[0].title}
β’ *ID Video :* ${res.all[0].videoId}
β’ *Diupload Pada :* ${res.all[0].ago}
β’ *Views :* ${res.all[0].views}
β’ *Durasi :* ${res.all[0].timestamp}
β’ *Channel :* ${res.all[0].author.name}
β’ *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `${fakeyoi}`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, Pada Saat Mengkonversi ${tipe} Ke Stiker. Pastikan Untuk Video Yang Dikirim Tidak Lebih Dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi Kesalahan, Silahkan Coba Beberapa Saat Lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
LexxyOFC.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: mek })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim Gambar Dengan Caption ${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim`)
}
break
case 'owner':
sendKontak(from, `${owner}`, `${ownerName} β¨`)
break      
case 'kirkon':
if (args.length < 1) return reply(`π΅ππππ π΅ππ π΄πππ π²ππ? \nπͺπππππ : \n${prefix}kirkon 6282279915237 Lexxy`)
txt1 = args[0]
txt2 = args[1]
sendKontak(from, `${txt1}`, `${txt2} β¨`)
break

	
//BATASNYA
default:
           if (budy.startsWith("$ ")){
           if (!mek.key.fromMe && !isOwner) return reply('```khusus owner bro```')
           	console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Dari owner ni`))
           	exec(chats.slice(2), (err, stdout) => {
           	if (err) return reply(`${err}`)
           	if (stdout) reply(`${stdout}`)
           	})
            }
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return LexxyOFC.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'pink'))
        }
	}
}


	
    
