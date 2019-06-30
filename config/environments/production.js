const ENV_URL = '/';
const PUBLIC_PATH = '/';

module.exports = {
    ENVIRONMENT_CONFIGURATION: {
        BACKEND_API: JSON.stringify(`${ENV_URL}/whatever`),
    },
    BUILD_CONFIGURATION: {
        PUBLIC_PATH,
    },
}
