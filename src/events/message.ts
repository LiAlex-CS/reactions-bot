import { event, Events } from '../utils/index.js';
import { MessageType } from 'discord.js';

export default event(Events.MessageCreate, async ({ log }, message) => {
  if (message.type === MessageType.Reply && message.content === 'ping') {
    const parentMessage = await message.fetchReference();
    parentMessage.reply('pong');
  }
});
