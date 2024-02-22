import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task.model";

export class TaskStatusVaildationPipe implements PipeTransform{
readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
];
    transform(value: any) {
        value = value.toUpperCase();
        if(!this.isStatusValid(value)){
            throw new BadRequestException(`"${value} is an invaild `)
        }
        console.log("value",value)
        return value; 
    }
private isStatusValid(status:any){
    const idx = this.allowedStatuses.indexOf((status))
    return idx !== -1;
}
}
