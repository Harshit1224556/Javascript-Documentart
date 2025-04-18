//declare a array
const arr = [0,1,2,3,4,5]
const arr1 = ["harshit","kkkk"]
const arr2 = new Array(1,2,3,4)
// console.log(arr1[0])



// array method
// arr.push(6)
// arr.push(7)

// for(let i=0;i<8;i++){
//     console.log(arr[i]);
// }

// arr.pop(7)
// for(let i=0;i<8;i++){
//     console.log(arr[i]);
// }

//mutliple element at the begining

// arr.unshift(-2,-1)
// for(let i=0;i<8;i++){
//     console.log(arr[i]);
// }


// removes element at the beginning

// arr.shift()
// for(let i=0;i<5;i++){
//     console.log(arr[i]);
// }

// if a array of this element is available or not 
// console.log(arr.includes(1))
const arr6 = [1,2,3,4,5]
// console.log(arr6.indexOf(4))

const a = arr6.slice(0,3)
// console.log("B ",a)
// console.log(a)

// copy ho jaata hahhh 

// const newarr = arr6.join()
// console.log(newarr)

//splice 
// const b = arr6.splice(0,3)
// console.log(b)
// console.log(arr6)


//2D Array in Java
// const marvelheros= ["thor","spiderman","Ironman"]
// const dcheros = ["superman","flash","batman"]
// marvelheros.push(dcheros)
// console.log(marvelheros[3][1])
//pushing entire element as a single array
// means here at index  3 complete dcheros is inserted and then 1 index


// const allHeros = marvelheros.concat(dcheros)
// console.log(allHeros)

// const all_new_heros = [...marvelheros, ...dcheros]

// console.log(all_new_heros)

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);


// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));