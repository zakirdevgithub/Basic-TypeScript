let myArray:any[]=[1,2,3,4,5,6,7,"Zakir","Zahid","Jahangir","Rozina","Rubaiya"];

let data=(e)=>{
   for(let i=0; i<e.length; i++){
            console.log(e[i]);
   }
}

data(myArray);