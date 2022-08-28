import TelegramBot from 'node-telegram-bot-api';
import { getTelegramChatId } from "../../../apis/telegram";
import { IEmitterProviderDTO, IEventEmitterData } from "dtos/IEventEmitter";

export class TelegramNotificationEmitter implements IEmitterProviderDTO {
  private telegramBot: TelegramBot;

  async sendNotification(data: IEventEmitterData) {
    const { message } = data;
    const token = process.env.TELEGRAM_BOT_TOKEN;

    if (!token) {
      throw new Error('telegram bot token is not defined');
    }

    try {
      // const chatId = await getTelegramChatId(token); // uncomment this line to call chatId by api
      const chatId = process.env.TELEGRAM_CHAT_ID;

      this.telegramBot = new TelegramBot(token, { polling: true });
      this.telegramBot.sendMessage(chatId, message);
    } catch (err) {
      console.log(err)
      throw new Error('Failed to get telegram chat id');
    }
  }
}