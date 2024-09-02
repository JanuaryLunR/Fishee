"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeConfigService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const users_model_1 = require("../users/users.model");
let SequelizeConfigService = class SequelizeConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    createSequelizeOptions() {
        const { sql: { dialect, logging, host, port, username, password, database }, } = this.configService.get('database');
        return {
            dialect,
            logging,
            host,
            port,
            username,
            password,
            database,
            models: [users_model_1.User],
            autoLoadModels: true,
            synchronize: true,
            define: {
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        };
    }
};
exports.SequelizeConfigService = SequelizeConfigService;
exports.SequelizeConfigService = SequelizeConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SequelizeConfigService);
//# sourceMappingURL=sequelizeConfig.service.js.map