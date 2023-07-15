import { getEnvironmentVariables } from './utils/env.js';
const Keys = {
    clientToken: getEnvironmentVariables('CLIENT_TOKEN')
};
export default Keys;
