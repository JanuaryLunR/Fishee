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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const local_auth_guard_1 = require("../auth/local.auth.guard");
const authenticated_guard_1 = require("../auth/authenticated.guard");
const swagger_1 = require("@nestjs/swagger");
const types_1 = require("./types");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    createUser(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    login(req) {
        return { user: req.user, msg: 'Logged in' };
    }
    loginCheck(req) {
        return req.user;
    }
    logout(req) {
        req.session.destroy();
        return { msg: 'session has ended' };
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: types_1.SignupResponse }),
    (0, common_1.Post)('/signup'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Header)('Content-type', 'application/json'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiBody)({ type: types_1.LoginUserRequest }),
    (0, swagger_1.ApiOkResponse)({ type: types_1.LoginUserResponse }),
    (0, common_1.Post)('/login'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: types_1.LoginCheckResponse }),
    (0, common_1.Get)('/login-check'),
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "loginCheck", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: types_1.LogoutUserResponse }),
    (0, common_1.Get)('/logout'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "logout", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map