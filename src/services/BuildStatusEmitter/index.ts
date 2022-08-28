import { BuildStatusEmitter } from "./BuildStatusEmitter";
import { TelegramNotificationEmitter } from '../../providers/implementations/telegram/TelegramNotificationEmitter';

const telegramNotificationEmmiter = new TelegramNotificationEmitter();
export const buildStatusEmitter = new BuildStatusEmitter(telegramNotificationEmmiter);