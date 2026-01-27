// let user = {
//     name : "abhinav bajpai",
//     age : 17,
//     hobbies : ["coding", "playing", "reading"],
//     contact : 8948558170,
//     demo: function(){
//         return "demo";
//     }
//     // here demo is s key function(method) of object user


// };
// console.log(user.hobbies[2]);
// console.log(Object.keys(user)); // it will give all the keys of object in array form
// console.log(Object.values(user)); // it will give all the values of object in array form.

// console.log(user);
// console.log(user.name);
// console.log(user.hobbies[1]);  
// // string literals..   
// console.log(`my name is ${user.name} and my age is ${user.age}`+ user.demo());

const car = {
    brand : "BMW",
    model : "X5",
    
};
Object.freeze(car); // it will freeze the object car means no changes can be done to this object now.
Object.seal(car); // it will seal the object car means no new key value pair can be added but existing key value pair can be modified.
car.brand = "Audi";     
car.color = "red";
console.log(car);