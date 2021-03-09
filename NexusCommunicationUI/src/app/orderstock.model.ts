export class OrderStock
{
    constructor(public oid?:number,
        public rid?:number,
        public requestedItem?:string,
        public requestedStock?:number,
        public status?:string,
        public vid?:number){}
}