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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const bcrypt = require("bcrypt");
const users_model_1 = require("./users.model");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    findOne(filter) {
        return this.userModel.findOne({ ...filter });
    }
    async create(createUserDto) {
        const user = new users_model_1.User();
        const existUsername = await this.findOne({
            where: { username: createUserDto.username },
        });
        const existEmail = await this.findOne({
            where: { email: createUserDto.email },
        });
        if (existUsername)
            return { warningMessage: 'User with this username already exist' };
        if (existEmail)
            return { warningMessage: 'User with this email already exist' };
        const hashedPassword = await bcrypt.hash(createUserDto.password, 6);
        user.username = createUserDto.username;
        user.password = hashedPassword;
        user.email = createUserDto.email;
        return user.save();
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __metadata("design:paramtypes", [Object])
], UsersService);
//# sourceMappingURL=users.service.js.map