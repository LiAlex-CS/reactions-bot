// import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
// import fs from 'node:fs';
// import path from 'node:path';
// class ExtendedClient extends Client {
//   commands?: Collection<unknown, unknown>;
// }
// const client: ExtendedClient = new Client({
//   intents: [GatewayIntentBits.Guilds]
// });
// client.commands = new Collection();
import { config } from 'dotenv';
import { resolve } from 'path';
const envFile = process.env.NODE_ENV === 'development' ? '.dev.env' : '.env';
const envFilePath = resolve(process.cwd(), envFile);
config({ path: envFilePath });
console.log(process.env.TEST);
