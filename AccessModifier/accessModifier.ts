class Student{

    //Field
   private firstName:string;
   private lastName:string;
   private age:number;

    constructor(firstName:string, lastName:string, age?:number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    //Method
    Show():void{
        let fullName=this.firstName+" "+this.lastName;
        // return fullName;
        console.log(fullName);
    }

}

let stdObject= new Student("Zakir","Hossain");

stdObject.Show();