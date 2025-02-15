// # Problem-3:
function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }
let constainsDigit = false;
    for (let i = 0; i < name.length; i++) {
        let char = name[i];
        if (!isNaN(char) && char !== " ") {
            constainsDigit = true;
            break;
        }
    }
    return constainsDigit;
}

let result = checkDigitsInName("Jannat123");
console.log(result);
