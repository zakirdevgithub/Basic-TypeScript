class Student{

    //Field
    firstName:string;
    lastName:string;
    age:number;

    constructor(firstName:string, lastName:string, age?:number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    //Method
    Show(){
        console.log(this.firstName+" "+this.lastName+" "+this.age);
    }

}

let stdObject= new Student("Zakir","Hossain");

stdObject.Show();