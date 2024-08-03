import { Controller, Get } from '@nestjs/common';

@Controller()
export class SalutationsController {
    
    @Get('/')
    salute(){
        return "Say hello to my little friend"
    }

}
