// # Problem-4:
function calculateFinalScore(input) {

    if (typeof input.name !== 'string' || 
        typeof input.testScore !== "number" 
        || typeof input.schoolGrade !== "number" 
        || typeof input.isFFamily !== "boolean"
    ) {
        return "Invalid Input";
    }
    let finalScore = input.testScore + input.schoolGrade;

    if(input.isFFamily) {
        finalScore += 20;
    }

    if (finalScore >+ 80) {
        return true;
    } else {
        return false;
    }
}

let result = calculateFinalScore ({
    name : "Lima",
    testScore : 45,
    schoolGrade : 25,
    isFFamily: false,
});
console.log(result);

