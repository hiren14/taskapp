import { Body, Controller,Delete,Get, Param, Post,Patch,Query, UsePipes, ValidationPipe, NotFoundException } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task-dto';
import { getTasksFilterDto } from './dto/get-tasks-filiter.dto';
import { NotFoundError } from 'rxjs';
import { TaskStatusVaildationPipe } from './pipes/task-status-vaild-pipes';

@Controller('task')
export class TaskController {
    constructor(private taskService:TaskService){}

    // @Get()
    // getAllTask() :Task[]{
    //     return this.taskService.getAllTask();
    // }

    @Get('/:id')
    
    getTaskById(@Param('id') id:string): Task {
     const found= this.taskService.getTaskById(id);
    
     if(!found){
   throw new  NotFoundException(`task with that is that id  ${id}not exisxt `)
     }
     return found
    }


    @Post()
    
    @UsePipes(ValidationPipe)
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
        @Body('status',TaskStatusVaildationPipe) status: TaskStatus,
    ):Task{
        return this.taskService.updatedTaskStatus(id,status)
    }
    @Get()
    getTasks(@Query(ValidationPipe) filterDta: getTasksFilterDto): Task[] {
       if(Object.keys(filterDta).length){
        return this.taskService.getTaskWithFilter(filterDta)
       }
       else{
        return this.taskService.getAllTask()

       }
       
    }
}

