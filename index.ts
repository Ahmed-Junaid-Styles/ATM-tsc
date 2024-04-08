#! /usr/bin/env node

import inquirer from "inquirer";

let balance:number = 10000;
let pin_code:number = 6789;

let pin_ans = await inquirer.prompt([
    {message: "Enter your pin code: ", type: "number", name: "pin"},
])


if(pin_code == pin_ans.pin){
    console.log("Correct Pin Code");
    
    let activity = await inquirer.prompt([
        {name: "operation", type: "list", message: "Please select an option to continue:", choices: ["Check balance", "Withdraw money"]}
    ])

    if(activity.operation == "Check balance"){
        console.log(`Your current balance is: ${balance}`)
    }else if(activity.operation == "Withdraw money"){
        
        let amount_ans = await inquirer.prompt([
            {message: "Enter the amount you want to withdraw: ", type: "number", name: "amount"}
        ])
        if(amount_ans.amount <= balance && amount_ans.amount >= 0){
            console.log(`You withdraw ${amount_ans.amount}`)
            balance -= amount_ans.amount
            console.log(`Your current balance is ${balance}`)
            
        }else if(amount_ans.amount <= 0){
            console.log(`Your withdraw cannot be negative`)
        }else if(amount_ans.amount >= balance){
            console.log(`You don't have enough balance to withdraw ${amount_ans.amount}`)
        }
    }

}
else{
    console.log("Incorrect Pin Code")
}