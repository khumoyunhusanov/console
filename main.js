
let arr = [[{a:{price:20}}]]
let array = [{a:{price:35}}]
let arre = [{a:{price:44}}]
let total = arr.reduce((a,b) =>{
    return a+=b
},0)
console.log(
arr[0][0].a.price,
array[0].a.price,
arre[0].a.price
);
console.log(total);
