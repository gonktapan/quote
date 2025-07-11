import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: any): Promise<any>;
    deleteUser(id: number): Promise<any>;
}
