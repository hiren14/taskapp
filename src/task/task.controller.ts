import { Body, Controller,Delete,Get, Param, Post,Patch } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task-dto';

@Controller('task')
export class TaskController {
    constructor(private taskService:TaskService){}

    @Get()
    getAllTask() :Task[]{
        return this.taskService.getAllTask();
    }

    @Get('/:id')
    
    getTaskById(@Param('id') id:string): Task {
        return this.taskService.getTaskById(id);
    }

    @Post()
    createTask( @Body() createTaskDto:CreateTaskDto): Task
{
        return this.taskService.createTask(createTaskDto)
       }


@Delete('/:id')

    deleteTask(@Param('id') id:string ):void{
            this.taskService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id:string,
        @Body('status') status: TaskStatus,
    ){
        return this.taskService.updatedTaskStatus(id,status)
    }
}
