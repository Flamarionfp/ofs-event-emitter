import axios from "axios";
import { IGetUpdatesResponse } from "./telegram.types";

export const telegramApi = axios.create({
  baseURL: 'https://api.telegram.org',
  timeout: 1000,
});

export async function getTelegramChatId(botToken: string): Promise<number> {
  const response = await telegramApi.get(`/bot${botToken}/getUpdates`);
  const data: IGetUpdatesResponse = response.data;

  console.log(response);

  console.log(data);

  if (data.ok) {
    const chatId = data.result[0].message.chat.id;
    return chatId;
  } else {
    throw new Error('Telegram API error');
  }
}