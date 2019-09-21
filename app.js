console.log('worked')

//const, let, var( не используется)

const firstVote = 10;
const secondVote = 10;
const thirdVote = 10;

let detractorsCount = 0;
let promoutersCount = 0;
if (thirdVote >= 9) {
    promoutersCount = promoutersCount + 1;
}
if (thirdVote <=6 ) {
    detractorsCount = detractorsCount + 1;
}
const nps = (promoutersCount/3 - detractorsCount/3)*100

console.log(nps);   
console.log(promoutersCount);
console.log(detractorsCount);