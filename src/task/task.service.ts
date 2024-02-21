import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task-dto';
@Injectable()
export class TaskService {
  private  task = []

  getAllTask(): Task[] {
    return this.task
  }

  getTaskById(id:string):Task{
    return this.task.find(task => task.id===id)
  }
  createTask(createTaskDto:CreateTaskDto) :Task{
    const {title, description} = createTaskDto;
    const task:Task ={
        id: uuidv4(),
        title,
        description,
        status: TaskStatus.OPEN,
       
    };
    this.task.push(task);
    return task;
  }
  deleteTask(id: string) :void{
  this.task =  this.task.filter(task => task.id!==id);
  }
  updatedTaskStatus(id:string,status: TaskStatus) {
      const uptask = this.getTaskById(id);
      uptask.status = status;
      return uptask
  }
}
