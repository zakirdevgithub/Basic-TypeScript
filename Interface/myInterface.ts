//ONE

// let fullName=(firstName:string, lastName:string, age:number, address:string, university:string)=>{
//     console.log(firstName+" "+lastName+" "+age+" "+address+" "+university);
// }

// fullName("Zakir","Hossain",25,"Chatmohar Natun Bazar","SUST");


//TWO
// let fullName=(ArgumentsPro:{firstName:string, lastName:string, age:number, address:string, university:string})=>{
//     console.log(ArgumentsPro.firstName+" "+ArgumentsPro.lastName+" "
//     +ArgumentsPro.age+" "+ArgumentsPro.address+" "+ArgumentsPro.university);
// }

// fullName({

//     firstName:"Zakir",
//     lastName:"Hossain",
//     age:25,
//     address:"Chatmohar Natun Bazar",
//     university:"sust"

// })

//Three with Interface

interface Arguments {
    firstName:string,
    lastName:string,
    age:number,
    address:string,
    university:string
}

let fullName=(ArgumentsPro: Arguments)=>{
    console.log(ArgumentsPro.firstName+" "+ArgumentsPro.lastName+" "
    +ArgumentsPro.age+" "+ArgumentsPro.address+" "+ArgumentsPro.university);
}

fullName({

    firstName:"Zakir",
    lastName:"Hossain",
    age:25,
    address:"Chatmohar Natun Bazar",
    university:"sust"

})