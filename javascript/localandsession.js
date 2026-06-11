// let obj={
//     name:"karthik",
//     age:21
// }
// localStorage.setItem("test",JSON.stringify(obj))
// let ls=localStorage.getItem("test")
// console.log(JSON.parse(ls))
// sessionStorage.setItem("test",JSON.stringify(obj))
// let ss=sessionStorage.getItem("test")
// console.log(JSON.parse(ss))

// function cart(callback){
//     setTimeout(()=>{
//        console.log("Added to cart")
//         callback() 
//     },3000)
   
// }
// function payment(callback){
//  setTimeout(()=>{
//        console.log("payment success") 
//         callback()
//     },3000)
    
// }
// function order(callback){
//     setTimeout(()=>{
//        console.log("order conformed")   
//        callback ()
//     },3000)
  
// }
// function deliver(callback){
//  setTimeout(()=>{
//        console.log("delivery conformed")
        
//     },3000)
   
// }
// function main(){
//     cart(()=>{
//         payment(()=>{
//             order(()=>{
//                 deliver();
//             })
//         })
//     });
// }
// main()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Graps")
// fruits.unshift("peanuts")
// let text = "<ul>";
// for (let i = 0; i < fruits.length; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// document.getElementById("list").innerHTML=text;
// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value) {
//   return value * 2;
// }
// console.log(numbers1)
// console.log(numbers2)
// const person = { 
//   firstName: "John",
//   lastName: "Doe",
  
  
//   fullName: ()=> {
//     console.log(this)
//     console.log( this.firstName + " " + this.lastName);
//   }

// };

// person.fullName()
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise((resolve, reject)=> {
//   ok = false;

//   if (ok) {
//     resolve("OK");
//   } else {
//     reject("Error");
//   }
// });
// console.log(myPromise)
// myPromise.then((data)=>{console.log(data)}
  
// ).catch((err)=>console.log(err))

// async function cart(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("add to cart completed")
//         resolve()
//     },2000)

//     })
    
// }
// async function payment(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//        console.log("Payment completed") 
//         resolve()
//     },3000)
   
//     })
    
    
// }
// async function order(){
//         return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("order placed")
//            resolve()
//     },5000)
    
//     })
    
// }
// async function delivery(){
//         return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//     console.log("delivery is done in few movements")
//        resolve()
//     },1000)
//     })
  
// }
// async function main(){
//   await  cart()
//   console.log(cart())
//   await  payment()
//    console.log(payment())
//    await order()
//    console.log(order())
//    await delivery()
//    console.log(delivery())
// }
// main()
async function fetchdata(){
let f= await(await fetch("https://jsonplaceholder.typicode.com/users")).json()
let text=""
for(let i of f){
    text+=`<h3>`
    text+=`Name:${i.name}-Username:${i.username}`
    text+=`</h3>`

}
document.getElementById("demo").innerHTML=text
}
fetchdata();

