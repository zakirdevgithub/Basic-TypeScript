var employee;
(function (employee) {
    employee[employee["CEO"] = 0] = "CEO";
    employee[employee["Manager"] = 1] = "Manager";
    employee[employee["Worker"] = 2] = "Worker";
    employee[employee["Helper"] = 3] = "Helper";
})(employee || (employee = {}));
;
var zakir = employee.CEO;
console.log(zakir);
var zahid = employee.Manager;
console.log(zahid);
var keya = employee.Worker;
console.log(keya);
var mitu = employee.Helper;
console.log(mitu);
var x = new Object();
var y = { id: 1, name: "Zakir", age: 25 };
console.log(y["id"]);
console.log(y["name"]);
for (var i in y) {
    console.log(i, y[i]);
}
