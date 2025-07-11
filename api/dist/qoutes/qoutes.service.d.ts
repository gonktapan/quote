import { PrismaService } from '../prisma.service';
export declare class QoutesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: {
        text: string;
    }): Promise<{
        id: number;
        text: string;
    }>;
    findAll(p0: {
        include: {
            votes: boolean;
        };
    }): Promise<({
        votes: {
            id: number;
            userId: number;
            qouteId: number;
        }[];
        _count: {
            votes: number;
        };
    } & {
        id: number;
        text: string;
    })[]>;
    findOne(id: number): Promise<{
        id: number;
        text: string;
    } | null>;
    update(id: number, data: {
        text: string;
    }): Promise<{
        id: number;
        text: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        text: string;
    }>;
    vote(id: number, userId: number): Promise<{
        id: number;
        userId: number;
        qouteId: number;
    }>;
}
