import { Client, GatewayIntentBits } from 'discord.js';
import { registerEvents } from './utils/index.js';
import Events from './events/index.js';
import Keys from './keys.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent
  ]
});

registerEvents(client, Events);

client.login(Keys.clientToken).catch((error) => {
  console.error('[Login Error]', error);
  process.exit(1);
});
