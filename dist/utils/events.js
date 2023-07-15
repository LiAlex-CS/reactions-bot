// Export events enum through here to reduce the amount of imports.
export { Events } from 'discord.js';
/// Creates an event struct.
export function event(key, callback) {
    return { key, callback };
}
/// Registers events to the client.
export function registerEvents(client, events) {
    for (const { key, callback } of events) {
        client.on(key, (...args) => {
            // Create a new log method for this event.
            const log = console.log.bind(console, `[Event: ${key}]`);
            // Try to catch ucaught errors.
            try {
                // Call the callback.
                callback({ client, log }, ...args);
            }
            catch (err) {
                // Log the error.
                log('[Uncaught Error]', err);
            }
        });
    }
}
