const array = ["kyle","caleb","crystal","devon"]
const foods = ["pizza", "pasta", "hotdog", "hamburger"]
const weapons = ["sword","pike","dagger","magic","bow"]
const players = ["kyle","cam","kazz","jae","anthony"]



// for(let i =0;i<array.length;i++ ){
//     console.log(array[i],"likes",foods[i]+".")
// }

// for(let i = array.length-1;i>0; i--){
//     console.log(array[i])
// }



for(let i = 0; i < foods.length; i++){
    if(foods[i]==="pizza"){
        console.log("I am hungry",i,foods[i])
    }else{
        console.log("I am not hungry",i,foods[i])
    }
}