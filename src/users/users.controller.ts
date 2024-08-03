import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService){}

    @Get("/")
    getAllUsers(){
        return this.UsersService.getAllUsers();
    }

    @Get("/:id")
    getUser(@Param("id") id: string){
        return this.UsersService.getUser(id);
    }
}

