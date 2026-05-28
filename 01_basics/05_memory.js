// stack => for primitive , heap => non-primitive

let myName = "Raktim";
let anotherName = myName 
anotherName = "Sagar";
console.log(anotherName);
console.log(myName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

//console.log(userOne);

let userTwo = userOne;
userTwo.email = "Raktim@google.com";
console.log(userOne.email);
console.log(userTwo.email);