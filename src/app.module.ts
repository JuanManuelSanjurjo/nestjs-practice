import { Module } from '@nestjs/common';
import { TasksModule } from './task/tasks.module';
import { UsersModule } from './users/users.module';
import { SalutationsController } from './salutations/salutations.controller';


@Module({
  imports: [TasksModule, UsersModule],
  controllers: [SalutationsController],
  providers: [],
})
export class AppModule {}
