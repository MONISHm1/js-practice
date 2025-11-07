const mynum = [1,2,3,4]
//  let initial = 10
// let val = mynum.reduce( function(acc,currval){
//     console.log(`${acc} and ${currval}`)
//     return acc + currval
// },initial)

// console.log(val);

const val = mynum.reduce((acc , currval) => acc + currval,(0))
console.log(val)