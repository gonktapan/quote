import { PrismaService } from '../prisma.service';
export type User = any;
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: {
        email: string;
        name: string;
        password: string;
    }): Promise<User>;
    findOne(email: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    delete(id: number): Promise<User>;
}
