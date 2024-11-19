let scores=[34,54,76,89,90,67,23,12,65,64,89];
let lowestScore=scores[0];
scores.forEach(score => {
    if (score < lowestScore) {
        lowestScore = score; 
    }
});
console.log(`The lowest score is ${lowestScore}`);
