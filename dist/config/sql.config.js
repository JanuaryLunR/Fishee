"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlConfig = void 0;
const config_1 = require("@nestjs/config");
exports.sqlConfig = (0, config_1.registerAs)('database', () => ({
    dialect: process.env.SQL_DIALECT || 'mysql',
    logging: process.env.SQL_LOGGING === 'true' ? true : false,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadEntities: true,
    synchronize: true,
}));
//# sourceMappingURL=sql.config.js.map