// # Problem-1 :

function calculateTax(income, expense) {
    if (typeof income !== "number" || 
        income < 0 || 
        typeof expense !=="number" || 
        expense <0) {
        return "Invalid Input";
    }
    let taxableAmount = income - expense;
    let tax = taxableAmount * 0.2;
    return tax;
    
}

const result = calculateTax(10000, 3000);
console.log(result);
