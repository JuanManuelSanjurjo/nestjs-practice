import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto, UpdateTaskDto } from "./dto/tasks.DTO";

@Controller("task")
export class TaskController {
    private readonly tasksService: TaskService;


    constructor(tasksService: TaskService){
        this.tasksService = tasksService
    }

    @Get("/")
    getAllTasks(@Query() query: any) {
        console.log(query)

        return this.tasksService.getAllTasks();
    }

    @Get("/:id")
    getTasks(@Param("id", ParseIntPipe) id: number) {
        console.log(id)
        return this.tasksService.getTask(id);
    }

    // @Post("/")
    // createTask(@Body("title") title: string, @Body("description") description: string) {
    //     return this.tasksService.createTask(title, description);
    // } 
    @Post("/")
    createTask(@Body() task : CreateTaskDto) {
        return this.tasksService.createTask(task);
    }

    // @Put("/")
    // updateTask(@Body() {id, title, description}: { id: string, title: string, description: string }) {
    //     return this.tasksService.updateTask( id, title, description);
    // }
    @Put("/")
    updateTask(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTask(task);
    }

    @Delete("/:id")
    deleteTask(@Param("id") id: any) {
        console.log(id)
        return this.tasksService.deleteTask(id);
    }

}