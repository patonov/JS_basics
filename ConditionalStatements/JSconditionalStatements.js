function numsComparer() {
    let a = 5;
    let b = 7;
    let result = a / b;

console.log(result.toFixed(2));
console.log(a < b); 
console.log(a > 0); 
console.log(a > 100); 
console.log(a < a);      
console.log(a <= 5);     
console.log(b == 2 * a); 
console.log("2" === 2);  
}

numsComparer();

function test() {
    let color = "red";
if (color === "red") {
  console.log("tomato");
} 
else {
    console.log("banana");
    console.log("bye");
    }
}

test();

function sevenComparer(num) {
    let a = num;
    if (a > 7) {
    console.log("Bigger than 7"); } 
    else if (a < 7){
    console.log("Lower than 7"); }
    else {
    console.log ("Equal to 7"); }
}

sevenComparer(11);