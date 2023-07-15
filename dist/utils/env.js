import { config } from 'dotenv';
import { resolve } from 'path';
const envFile = process.env.NODE_ENV === 'development' ? '.dev.env' : '.env';
const envFilePath = resolve(process.cwd(), envFile);
config({ path: envFilePath });
export const getEnvironmentVariables = (name, fallback) => {
    var _a;
    const value = (_a = process.env[name]) !== null && _a !== void 0 ? _a : fallback;
    if (value === undefined) {
        throw new Error(`Environment variable ${name} is not set.`);
    }
    return value;
};
