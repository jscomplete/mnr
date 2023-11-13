const env = process.env

export const PORT = env.PORT ?? "8080";
export const HOST = env.HOST ?? "localhost";
export const SERVER_URL = `http://${HOST}:${PORT}`;
export const MONGODB_URI = env.MONGO_DB ?? "mongodb://0.0.0.0:27017/";
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";
export default {
    PORT,
    HOST,
    SERVER_URL
};