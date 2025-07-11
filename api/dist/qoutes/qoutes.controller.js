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
exports.QoutesController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const qoutes_service_1 = require("./qoutes.service");
let QoutesController = class QoutesController {
    qouteService;
    constructor(qouteService) {
        this.qouteService = qouteService;
    }
    async getAllQuotes() {
        return this.qouteService.findAll({
            include: { votes: true },
        });
    }
    async createQuote(req) {
        const qoutes = req.body;
        for (const qoute of qoutes) {
            const { text } = qoute;
            await this.qouteService.create({ text });
        }
        return { message: 'Quotes created successfully' };
    }
    async getQuote(req) {
        const { id } = req.params;
        return this.qouteService.findOne(Number(id));
    }
    async updateQuote(req) {
        const { id } = req.params;
        const { text } = req.body;
        return this.qouteService.update(Number(id), { text });
    }
    async deleteQuote(req) {
        const { id } = req.params;
        return this.qouteService.delete(Number(id));
    }
    async voteQuote(req) {
        const { id } = req.params;
        const userId = req.user.sub;
        return this.qouteService.vote(Number(id), userId);
    }
};
exports.QoutesController = QoutesController;
__decorate([
    (0, common_2.Get)(),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QoutesController.prototype, "getAllQuotes", null);
__decorate([
    (0, common_2.Post)(),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_2.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QoutesController.prototype, "createQuote", null);
__decorate([
    (0, common_2.Get)(':id'),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_2.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QoutesController.prototype, "getQuote", null);
__decorate([
    (0, common_2.Put)(':id'),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_2.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QoutesController.prototype, "updateQuote", null);
__decorate([
    (0, common_2.Delete)(':id'),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_2.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QoutesController.prototype, "deleteQuote", null);
__decorate([
    (0, common_2.Post)(':id/vote'),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_2.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QoutesController.prototype, "voteQuote", null);
exports.QoutesController = QoutesController = __decorate([
    (0, common_1.Controller)('quotes'),
    __metadata("design:paramtypes", [qoutes_service_1.QoutesService])
], QoutesController);
//# sourceMappingURL=qoutes.controller.js.map