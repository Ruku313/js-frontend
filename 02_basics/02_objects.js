// singleton => object made from constructor
//Object.create

// object literals

const mySym = Symbol("key1")
const jsuser = {
    name : "Raktim", // system by default thinks name is string
    "full name" : "Raktim Das",
    [mySym] : "myKey1",
    age : 18 ,
    location : "Howrah",
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["MOnday","Saturday"]
};

// console.log(jsuser.age);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

// jsuser.email = "Raktim@amazon.com";
// Object.freeze(jsuser);
// jsuser.email = "raktim@towerresearch.com"
// console.log(jsuser.email);
jsuser.greeting = function(){
    console.log("hello js user");
}

jsuser.greetingtwp = function(){
    console.log(`hello js user,${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwp());