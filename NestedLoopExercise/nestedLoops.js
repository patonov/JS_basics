function watch() {
    
    for (let h = 0; h <= 23; h++) {
        for (let m = 0; m <= 59; m++) {
            console.log(`${h}:${m}`);
        }
    }    
}
watch();

function multiplicationTable() {
    
    for (let x = 1; x <= 10; x++) {
        for (let y = 1; y <= 10; y++) {
          let product = x * y;
          console.log(`${x} * ${y} = ${product}`);
        }
    } 
}
multiplicationTable();
