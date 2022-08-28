export interface IEventEmitterData {
  message: string;
}

export interface IEmitterProviderDTO {
  sendNotification(data: IEventEmitterData): void;
}