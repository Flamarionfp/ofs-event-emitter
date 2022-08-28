interface IMessageData {
  chat: { id: number }
}

interface IGetUpdateResultData {
  message: IMessageData;
}

export interface IGetUpdatesResponse {
  ok: boolean;
  result: IGetUpdateResultData[];
}