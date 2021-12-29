function reverseCycler(num) {
let n = Number(num);
console.log("Odds:");
for(let i = n; i >= 0; i--){
    if (i % 2 != 0)
    {
    console.log(i);
    }
    
}
console.log("Evens:");
for(let i = n; i > 0; i--){
    if (i % 2 == 0)
    {
    console.log(i);
    }
}
}
reverseCycler(10);
console.log("__________");

function powersOfNumber(num) {
num = Number(num);

for(let i = 0; i < 10; i++) {
    console.log(Math.pow(num, i));
}

}
powersOfNumber(5);