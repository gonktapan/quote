"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const qoutes_service_1 = require("./qoutes/qoutes.service");
const qoutes_controller_1 = require("./qoutes/qoutes.controller");
const qoutes_module_1 = require("./qoutes/qoutes.module");
const prisma_service_1 = require("./prisma.service");
const users_controller_1 = require("./users/users.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, users_module_1.UsersModule, qoutes_module_1.QoutesModule],
        controllers: [app_controller_1.AppController, qoutes_controller_1.QoutesController, users_controller_1.UsersController],
        providers: [app_service_1.AppService, qoutes_service_1.QoutesService, prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map