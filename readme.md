### Event Emitter OSF.

Author: [Flamarion Fagundes Pinto](https://github.com/Flamarionfp).

Typescript and Node JS.

##### How to use:

- Send a message to `@BotFather` on `Telegram`;
- Put the bot `token` that you received into .env file;
- Add your bot in some group;
- Make a GET request to https://api.telegram.org/bot0000000/getUpdates to get the chatId group (replace zeros for your bot token);
- Put the `chatId` in .env file;

##### Integrate with OSF project:

Add this code bellow inside your `nodemon.json` file.

```json
 "events": {
    "restart": "cd script-path-here/osf-event-emitter && yarn start"
  }
```
