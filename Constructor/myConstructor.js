var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //Method
    Student.prototype.Show = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.age);
    };
    return Student;
}());
var stdObject = new Student("Zakir", "Hossain");
stdObject.Show();
