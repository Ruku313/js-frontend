// const user = {};
// user.id = "abc";
// user.name = "Raktim";
// user.isloggedIN = false ; 
// // console.log(user);

// const ruser = {
//     email : "user@gmail.com",
//     fullname : {
//         userfullname : {
//             firstname : "Raktim",
//             lastname : "Das"
//         }
//     }
// };

// console.log(ruser.fullname.userfullname.firstname);

// const obj1 = {1 : 'a' , 2 : 'b'};
// const obj2 = {3 : 'a' , 4 : 'b'};

// // const obj3 = Object.assign({},obj1,obj2);
// const obj3 = {...obj1,...obj2};
// console.log(obj3)

const course = {
    name : "js in hindi",
    proce : "999",
    courseteacher : "Hitesh"
}

const {courseteacher : instructor} = course;
console.log(instructor);

// {
//     "name" : "Hitesh",
//     "course ": "js in hindi",
// }