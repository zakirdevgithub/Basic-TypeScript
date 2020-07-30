var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //Method
    Student.prototype.Show = function () {
        var fullName = this.firstName + " " + this.lastName;
        // return fullName;
        console.log(fullName);
    };
    return Student;
}());
var stdObject = new Student("Zakir", "Hossain");
stdObject.Show();
