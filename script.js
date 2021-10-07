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
    }
    roll() {
        this.value = randomVal(1, 7);
        let i = this.div.id - 1;
        let cleanArr = sumArr.filter(j => typeof(j) === "number");
        sumArr = cleanArr;
        if (sumArr[i] == null) {       
            sumArr[i] = this.value;
            this.div.textContent = this.value;
        } else if (i == diceCount) {
            this.div.textContent = this.value;
            sumArr.push(this.value);
        } else {
            sumArr[i] = this.value;
            this.div.textContent = this.value;
        }
        console.log(sum, sumArr);
    }
    
    removeDie() {
        let index = this.div.id - 1;
        let el = sumArr[index];
        /*for (let j = sumArr.length - 1; j >= 0; j--) {
            if (sumArr[j] == index) {
            sumArr.splice(j, 1);
            }
        };*/
        sumArr.splice(index, 1);
        this.div.remove();
        console.log(sumArr);
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
        for (let j = sumArr.length - 1; j >= 0; j--) {
            sumArr.splice(j, 1, value);
        };

        cells[i].textContent = value;
        /*let id = index + 1;
        let reroll = document.getElementById(id);*/
        //console.log(cells[i], value, sumArr);  
        console.log(value, cells[i], sumArr);
};
};

sumDice.addEventListener('click', function () {
    let answer = sumArr.reduce((acc, val) => acc + val);
    sumDisplay.textContent = answer;
    answer = 0;
});