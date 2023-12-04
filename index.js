const TelegramBot = require("node-telegram-bot-api");

const token = "6668151616:AAHKzHjtVWcjXGpRkNpXmAaLRm7X-II-Vlo";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg?.chat?.id;

  if (text === "/start") {
    return bot.sendMessage(
      chatId,
      "Assalomu alaykum va rahmatillohu va barakatoh!"
    );
  }

  if (text === "/info") {
    return bot.sendMessage(chatId, "Mirabbos Platform");
  }
});
