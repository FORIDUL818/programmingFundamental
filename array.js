// variable
// condition
// loop
// funtion
// object 


// what is data structure 
/*  Data structure is a way of organizing, storing, and managing data so that it can be accessed and modified efficiently. It defines how data elements relate to each other and how they can be processed.*/

// data structure list

// arrary 
// linkList
// stack 
// queue
// tree
// graph
// hash table
// hash map
// hash set 


// array 
// time complexity and 0(n);

/* array is a lenear-data structure. it's a contiguas memory location. it's work indexing way index start 0 index value is a data value 
 and memory location 1004,1008 array is colletion of eliment.same type and multiple type collect data.
*/

// type of array 
// one dymention 
// mullti dymention 

// one dymention

// let array=[10,20,40,50,60,70]
// mullti dymention array 
/* let arr=[
 [
  10,20,30,40,50,60,70
 ],
 [1,30,40,50,23,54,323,]
] */

// one dymention

// array data structure input 

let arr = [100,  30, 504, 234, 44, 44,600]; // Example array
// array access 
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

// // data update

arr[0]=100
arr[1]=200;
arr[2]=300;
arr[3]=110;
console.log(arr)

// delete 
delete arr[0];
delete arr[1];
console.log(arr)

// add start 
arr.unshift(100)
arr.unshift(200)
console.log(arr)

// add end

arr.push(400)
arr.push(800)
console.log(arr)


    let max=arr[0];
     let min=arr[0]
   // Calculate the sum of the array
let data = 0;
for (let i = 0; i < arr.length; i++) {
    data += arr[i];
     if (max<arr[i]) {
        max=arr[i];
     }
     if (min>arr[i]) {
        min=arr[i]
     }


} 
// Calculate the average and floor it
let data2 = data / arr.length; // Average
let flooredData2 = Math.floor(data2); // Store the floored value
console.log("Average (floored):", flooredData2); // Log the floored average
// Fill the array with the floored average
arr.fill(flooredData2);
console.log("Modified array:", arr); // Log the modified array
console.log("maximum value", max)
console.log( "minimum vlaue" + min)
let arrtotalhaf = data/2;
let midValue=Math.floor(arrtotalhaf)
console.log( "mid value", midValue)
console.log( "avarage" + flooredData2)
console.log( "total point", data)
