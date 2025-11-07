const num = [ 1,2,3,4,5]

const newNum = num.map((number) => {
    return number + 10
})

// console.log(newNum);

const myNum = num.map((number) => number *10)
                  .map((number) => number +1)
                  .filter((number) => number >= 30)

console.log(myNum)