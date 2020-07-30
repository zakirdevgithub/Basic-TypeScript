let myName:any="Zakir Hossain";
console.log(myName);
myName=2013338024;
console.log(myName);

let friends:string[]=["Zakir","Zahid","Jewel","Sohel"];
console.log(friends);
friends.push("Limon");
console.log(friends[0])
console.log(friends[1]);
console.log(friends[2]);

let info:any[]=[1,"Zakir",25,45.7];
console.log(info[0]);
console.log(info[1]);


let myNumbers:Array<number>=[10,20,30,40,50,60,70,80,90,100];
myNumbers.forEach( e =>{
    console.log(e);
})
