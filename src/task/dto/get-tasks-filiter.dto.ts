import { IsOptional,IsIn, IsNotEmpty } from "class-validator";
import { TaskStatus } from "../task.model";

export class getTasksFilterDto{
    
    
    @IsOptional()
    @IsIn([TaskStatus.DONE,TaskStatus.IN_PROGRESS,TaskStatus.OPEN])

    status: TaskStatus;
 
 @IsOptional()
 @IsNotEmpty()
    search: string;
}