import { buildStatusEmitter } from './src/services/BuildStatusEmitter';
require('dotenv/config');

buildStatusEmitter.execute();