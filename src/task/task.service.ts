import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto/tasks.DTO';

export interface Task {
    id: number;
    title: string;
    description: string;
}



@Injectable()
export class TaskService {
    private tasks: Task[] = []


    getAllTasks(): Task[] {
        return this.tasks
    }

    getTask(id: number): Task | NotFoundException {
        const found =  this.tasks.find(item => item.id == id) 
        
        return found || new NotFoundException(`La tarea con id ${id} no fue encontrada`)

    }

    createTask(task : CreateTaskDto) {
        this.tasks.push({id: this.tasks.length + 1 , ...task})
        return {...task}
    }

    updateTask(task : UpdateTaskDto){
        return task
    }
    
    deleteTask(id: string){
        this.tasks = this.tasks.filter(task => task.id != parseInt(id))
        return "task deleted"
    }
}
