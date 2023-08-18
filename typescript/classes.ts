class employee
{
    id:number;
    name:string;
    salary:number;
    public x:number;

    constructor(id:number,name:string,salary:number)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    displayEmployee():void
    {
        console.log(this.id);
        console.log(this.name);
        console.log(this.salary);

    }
    calculateperday():number
    {
        return this.salary/30;
    }
}
let emp=new employee(1,"sachin",70000);
emp.displayEmployee()
console.log(emp.calculateperday());
emp.x=300;
console.log(emp.x);