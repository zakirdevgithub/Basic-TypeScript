class Student{

    //Field
    firstName:string;
    lastName:string;
    age:number;

    //Method
    Show(){
        console.log(this.firstName+" "+this.lastName+" "+this.age);
    }

}

let stdObject= new Student();
stdObject.firstName="Zakir";
stdObject.lastName="Hossain";
stdObject.age=25;
stdObject.Show();