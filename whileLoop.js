let credit = 10000
let day = 1


while(credit>0){
    const spa = 50
    const lounge = 120
    const lambo = 120
    
    credit = credit - (spa + lambo + lounge)
    console.log(day,"day")
    console.log("My credit is",credit)
    console.log("My expense of the day is", spa+lounge+lambo)
    console.log({spa,lambo,lounge})
    day++
}
console.log("My final credit is",credit)