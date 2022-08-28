import { IEmitterProviderDTO } from 'dtos/IEventEmitter';

export class BuildStatusEmitter {
  constructor(private emitterProvider: IEmitterProviderDTO) { }

  execute(): void {
    this.emitterProvider.sendNotification({ message: 'updating build...' })
  }
}