const { Telegraf } = require('telegraf')

const bot = new Telegraf('5281627390:AAG2Hk0JB7vETI__chwRlu-aH3wIHuEnREI')
bot.start((ctx) => ctx.reply('Welcome ı will check your contract links pls write #check and entry your links'))

bot.hears('#check', (ctx) => ctx.reply('clean or not clean ?'))
bot.launch()