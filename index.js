const TelegramBot = require("node-telegram-bot-api");

const token = "6668151616:AAHKzHjtVWcjXGpRkNpXmAaLRm7X-II-Vlo";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg?.chat?.id;

  if (text === "/start") {
    return bot.sendMessage(
      chatId,
      `Assalomu alaykum hurmatli ${msg?.from?.first_name} botimizga kirganingizdan hursandman`
    );
  }

  if (text === "/info") {
    await bot.sendSticker(
      chatId,
      "https://tlgrm.eu/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/192/2.webp"
    );
    await bot.sendPhoto(
      chatId,
      "https://tlgrm.eu/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/192/2.webp"
    );
    return bot.sendMessage(
      chatId,
      `Sizning telegramingiz ${msg?.from?.username} sizni ismingiz ${msg?.from?.first_name} ${msg?.from?.last_name}`
    );
  }
});
