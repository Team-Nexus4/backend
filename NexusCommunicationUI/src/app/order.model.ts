export class Order
{

    constructor(public oid?:number,public rid?:number,public cid?:number,public requested_plan?:number,public status?:string )
    {
        
    }
    constructor(public oid?:number,
                public rid?:number,
                public cid?:number,
                public requested_plan?:number,
                public status?:string){}

}