function accountBalance(input) {
    let deposit = input[0];
    let balance = 0;
    let index = 1;

    while (deposit !== "NoMoreMoney") {
       let amount = Number(deposit);
       if (amount < 0) { 
           console.log("Invalid operation!");
           break;
     }
       balance += amount;
       console.log(`Increase: ${amount.toFixed(2)}`);
       deposit = input[index];      
       index++; 
    }
    console.log(`Total: ${balance.toFixed(2)}`);
 }

 accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
 accountBalance(["120", "45.55", "-150"]);
 
 function password(input) {
    let username = input[0];
    let password = input[1];
    let data = input[2];
    let index = 3;
    
    while (data !== password) {
      data = input[index];
      index++;
    }
    console.log(`Welcome ${username}!`);
  }
password(["Patonov", "1234", "Pass", "1324", "1234"]);  