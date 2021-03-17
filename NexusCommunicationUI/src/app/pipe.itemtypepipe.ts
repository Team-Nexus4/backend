import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"ItemTypePipe"})
export class ItemTypePipe implements PipeTransform
{
    transform(value:any)
    {
        console.log(value);
        if(value=="ik")
            return "Internet Kit";
        else
            return "Landline Kit";

    }

}