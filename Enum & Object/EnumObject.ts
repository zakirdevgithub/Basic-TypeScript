enum employee{CEO,Manager,Worker,Helper};

let zakir : number=employee.CEO;
console.log(zakir);

let zahid : number=employee.Manager;
console.log(zahid);

let keya : number=employee.Worker;
console.log(keya);

let mitu : number=employee.Helper;
console.log(mitu);

let x: Object= new Object();

let y:Object={id:1, name:"Zakir",age:25};

console.log(y["id"]);
console.log(y["name"]);

for(let i in y){
    console.log(i,y[i]);
}