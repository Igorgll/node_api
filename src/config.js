import { config } from 'dotenv';
config();

export default {
    port: process.env.PORT || 4000, //If port exists use it, if not, define as 4000
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDatabase: process.env.DB_DATABASE || '',
}