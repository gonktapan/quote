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
exports.QoutesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let QoutesService = class QoutesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        let voteCount = await this.prisma.vote_Qoute.count();
        if (voteCount > 0) {
            throw new Error('Cannot create a new quote while votes exist.');
        }
        return this.prisma.qoute.create({
            data: {
                text: data.text,
            },
        });
    }
    async findAll(p0) {
        return this.prisma.qoute.findMany({
            include: {
                votes: true,
                _count: {
                    select: { votes: true }
                }
            }
        });
    }
    async findOne(id) {
        return this.prisma.qoute.findUnique({
            where: { id },
        });
    }
    async update(id, data) {
        const voteCount = await this.prisma.vote_Qoute.count({
            where: { qouteId: id },
        });
        if (voteCount > 0) {
            throw new Error('Cannot update this quote because it already has votes.');
        }
        return this.prisma.qoute.update({
            where: { id },
            data: {
                text: data.text,
            },
        });
    }
    async delete(id) {
        return this.prisma.qoute.delete({
            where: { id },
        });
    }
    async vote(id, userId) {
        return this.prisma.vote_Qoute.create({
            data: {
                qouteId: id,
                userId: userId,
            },
        });
    }
};
exports.QoutesService = QoutesService;
exports.QoutesService = QoutesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], QoutesService);
//# sourceMappingURL=qoutes.service.js.map