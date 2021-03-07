export class PlanBill
{
    constructor(public duration?:number,
                public cost?:number,
                public status?:string,
                public bill?:number,
                public startdate?:Date,
                public enddate?:Date,
                public speed?:string,
                public cnid?:number,
                public billstatus?:string){}
}