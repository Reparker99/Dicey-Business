let makeDice = document.getElementById('generateDie');
let resultsDiv = document.getElementById('results');
let rollDice = document.getElementById('rollDice');
let sumDice = document.getElementById('sumDice');
let sumDisplay = document.getElementById('sum');

let diceCount = 0;

let sum = 0;

let sumArr = [];

class Die {
    constructor() {
        diceCount++
        this.div = document.createElement('div');
        this.div.className = 'square text-center align-content';
        this.div.id = diceCount;
        this.roll();
        this.div.addEventListener('click', () => {
            this.roll();
        });
        this.div.addEventListener('dblclick', () => {
            this.removeDie();
        })
        resultsDiv.appendChild(this.div);
        console.log(this.div.id);
    }
    roll() {
        this.value = randomVal(1, 7);
        let i = this.div.id - 1;
        let cleanArr = sumArr.filter(j => typeof(j) === "number");
        sumArr = cleanArr;
            sumArr[i] = this.value;
            this.div.textContent = this.value;
        
        console.log(sum, sumArr);
    }
    
    removeDie() {
        diceCount--;
        let index = this.div.id - 1;
        let el = sumArr[index];
        /*for (let j = sumArr.length - 1; j >= 0; j--) {
            if (sumArr[j] == index) {
            sumArr.splice(j, 1);
            }
        };*/
        for (let i = 0; i < sumArr.length; i++) {
            let die = document.getElementById(i + 1);
            let dieId = parseInt(die.id);
            console.log("Die ID: " + dieId);
            if ( dieId > index) {
                dieId--;
                die.id = dieId;
                console.log("New ID: " + dieId);
            }
        }
        sumArr.splice(index, 1);
        this.div.remove();
        console.log(sumArr);
        console.log("Arr Length: " + sumArr.length);
    }
};

function randomVal (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

makeDice.addEventListener('click', function () {
    new Die();
});

rollDice.addEventListener('click', rerollDice);
/*for (let i = 1; i <= diceCount; i++) {
    let index = i - 1;
    let reroll = document.getElementById(i);
    let value = randomVal(1, 7)
    sumArr.splice(index, 1, value);
    console.log(reroll, value, sumArr);
    reroll.textContent = value;
}*/

function rerollDice () {
    let cells = $('#results > div');
    for (let i = 0; i < cells.length; i++) {

        let value = randomVal(1, 7);
        sumArr[i] = value;
        cells[i].textContent = value;  
        console.log(value, cells[i], sumArr);
};
};

sumDice.addEventListener('click', function () {
    let answer = sumArr.reduce((acc, val) => acc + val);
    sumDisplay.textContent = answer;
    answer = 0;
});