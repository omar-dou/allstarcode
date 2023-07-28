// Part 1
function combineStrings(word1, word2) {
    return word1+word2;

}


let s1 = combineStrings("ABC", "DEF");
let s2 = combineStrings("poke", "mon");
let s3 = combineStrings("friend", "ship");
let s4 = combineStrings("1", "2");

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

//Part 3
function checkAnswer(num1, num2, operator, answer) {
    if (operator == "+") {
        guess = (num1 + num2)
    }
    if (operator == "-"){
        guess = (num1 - num2)
    }
    if (guess == answer){
        return true
    }
    if (guess != answer) {
        return false
    }
}

let b1 = checkAnswer(3, 5, "+", 8);
let b2 = checkAnswer(9, 8, "+", 15);
let b3 = checkAnswer(5, 4, "-", 1);
let b4 = checkAnswer(0, 1, "-", -2);


console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
//Part 4
function oddNumberCatcher(arr){
    index = 0
    while (index < arr.length){
        if (arr[index] % 2 == 1) {
            return index
        }
        index ++
     
    }
    return -1
}

let i1 = oddNumberCatcher([8, 22, 10, 15, 2, 50, 28]);
let i2 = oddNumberCatcher([1, 2, 3, 4, 5]);
let i3 = oddNumberCatcher([2, 2, 2, 2, 2, 2, 2, 2]);
let i4 = oddNumberCatcher([]);


console.log(i1);
console.log(i2);
console.log(i3);
console.log(i4);

