samenum = false;
attempt = 0;
while (samenum == false) {
    num1 = Math.floor((Math.random() * 10) + 1);
    num2 = Math.floor((Math.random() * 10) + 1);
    attempt++
    console.log("Try #"+attempt, "-", "1st random number:", num1, "2nd random number", num2)
    if (num1 == num2) {
        console.log("Same Random Numbers!End Loop!");
        samenum=true;
    }
}
