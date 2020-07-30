var Student = /** @class */ (function () {
    function Student() {
    }
    //Method
    Student.prototype.Show = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.age);
    };
    return Student;
}());
var stdObject = new Student();
stdObject.firstName = "Zakir";
stdObject.lastName = "Hossain";
stdObject.age = 25;
stdObject.Show();
