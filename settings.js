
const fs = require('fs')
const chalk = require('chalk')
global.footer = 'Lenttobd'//ganti
global.pulsa = "628xxxxx"//ganti
global.gopay = "628xxx"//ganti
global.dana = "628xxx"//ganti
global.paypal = "---" 
global.shopay = "---" 
global.saweria = "---" 
global.sociabus = "---" 
global.bni = "---" 
global.bri = "---" 
global.bankjatim = "---" 
global.jago = "---" 
global.neobank = "---" 
global.packname = 'Lenttobs'//ganti
global.footer = '©Maslent'//ganti
global.ovo = "628xxx"//ganti
global.ownerlen = "Maslent/Lenttobs"
global.owner = ['628xxx'] //ubh nomor owner hp
global.ownername = "Lenttobs" 
global.ytname = "YT: lenttobs"
global.socialm = "IG: vlntncptr"
global.location = "Indonesia, Jawatimur, Lumajang"
global.ownernomer = "628xx" 
global.premium = ['628xxxx'] 
global.nomorcs = '628xx'
global.botname = 'Chiper MD' 
global.linkz = "Link Gc"
global.websitex = "yt mu"
global.botscript = '-'
global.themeemoji = "😿"
global.packname = "Sticker By"
global.author = "Made by"
global.wm = "Lenttobs"
global.sessionName = 'session'
global.prefa = global.prefa = ['!']
global.sp = '!'

global.mess = {
success: 'Sucses....',
admin: 'Mohon Maaf Feature hanya Khusus admin',
botAdmin: 'Bot Harus Menjadi Admin Group Terlebih dahulu',
premime: 'Maaf Kamu tidak Bisa menggunakan Feature Premium',
owner: 'Maaf Kamu Tidak Bisa menggunakan Feature Owner', 
group: 'Feature Hanya Bisa Di gunakan Di dalam Group',
private: 'Feature Hanya Bisa di gunakan di dalam Private Chat!',
bot: 'Feature Hanya Bisa di gunakan oleh bot',
wait: 'Permintaan Anda sedang kami proses....',
linkm: 'Mana Link Nya?',
}
global.thum = fs.readFileSync("./image/image.jpg")
global.log0 = fs.readFileSync("./image/image.jpg")
global.err4r = fs.readFileSync("./image/image.jpg")
global.thumb = fs.readFileSync("./image/image.jpg")
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
