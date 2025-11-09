// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task is completed')
//         resolve();
//     },1000)
// })

//  promiseOne.then(function() {
//     console.log("promise is consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("async task ")
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("promise consumed")
// })

// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log("task 3 executed")
//         resolve({userName: "MONISH", email: "mon@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
// console.log(user)
// })



// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//     let error = false;
//     if(!error){
//             resolve({userName: "MONISH", email: "mon@gmail.com"})
//     } else {
//         reject('error: some thing went wrong')
//     }
//     },1000)
// })
// promiseFour
// .then((user)=>{
//  console.log(user)
//  return user.userName
// })
// .then((userName)=>{
//     console.log(userName)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log('the promise is finally resolved or rejected')
// })



// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({userName: "javascript", password: 123})
//         } else {
//             reject('Error: js went wrong!')
//         }
//     },1000)

// })

// async function consumeProm() {
//    try {
//      const response = await promiseFive;
//     console.log(response)
//    } catch (error) {
//     console.log(error)
//    }
// }
// consumeProm();




// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =  await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error)
//     }
// }

// getAllUser();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log("Eror!",error)
}).finally(()=>{
    console.log("finally executed!")
})