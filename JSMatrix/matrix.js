var matrix = [];

for(var row=0; row<4; row++) {
    matrix[row] = [];
    for(var col=0; col<4; col++) {
        matrix[row][col] = col + 1;
    }
}

for(var row=0; row<4; row++) {
    
    console.log(matrix[row]);
}