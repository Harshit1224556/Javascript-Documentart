console.log("Arithmetic operation: ");
let a = 10,b=5;
console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b);
console.log("a % b = ",a%b);
console.log("a ** b = ",a**b);
a++; console.log("a++ = ",a);
b--; console.log("b-- = ",b);




console.log("\n");




console.log("Assingnment operaor: ");
let x = 10;
x+=5; console.log("x += 5 ->",x);
x-=3; console.log("x -= 5 ->",x);
x*=2; console.log("x *= 5 ->",x);
x/=5; console.log("x /= 5 ->",x);
console.log("\n");






console.log("Comparision operator: ");
console.log("10 == '10' ",10 == "10");
console.log("10 > 5",10>5);



console.log("Bitwise Operator: ");
console.log("5 & 1 = ",5&1);
console.log("5 | 1 = ",5|1);
console.log("5 ^ 1 = ",5^1);
console.log("~5 = ",~5);
console.log("5 << 1 = ",5<<1);
console.log("5 >>  1 = ",5>>1);
console.log("\n");


console.log("Terneray operator: ");
let age = 20;
let status = (age >= 18) ? "Adult":"Minor";
console.log("Status: ",status);
console.log("\n");

// type operator
console.log("Type operator: ");
console.log("typeof 42 = ",typeof 42);
console.log("typeof 'Hello' = ",typeof "Hello");
console.log("typeof true = ",typeof true);
console.log("typeof {} = ",typeof {});
console.log("typeof [] = ",typeof []);

// instance operator

console.log("Instance Operator: ");
let arr = [1,2,3];
console.log("arr instance of arr->",arr instanceof Array);
console.log("arr instance of Object->",arr instanceof Object);


