function mash(){
    return "You will live in a "+ getHome()+" and travel to "+ getTravelCount()+" countries, and have a pet "+getPet()+"! "+"You will drive a "+getCar()+" and have "+getChildCount()+" kids!"
}
function randNumGenerator(maxNum){
    num2 = Math.floor((Math.random() * maxNum));
    return num2
}
function getHome(){
    houseopt = process.argv[2]
    lst = ["Mansion", "Castle", "Shack", "House"]
    if (process.argv.length > 2) {
        lst = ["Mansion", "Castle", "Shack", "House", houseopt]
    }
    housenum = lst.length
    index = randNumGenerator(housenum)
    house = lst[index]
    console.log(lst)
    return house
}
function getTravelCount(){
    travel = randNumGenerator(101)
    return travel
}

function getPet(){
    petopt = process.argv[3]
    randomPets = ["Dog", "Monkey", "Snail", "Dragon"]
    index = randNumGenerator(4)
    pet = randomPets[index]
    fiftyorfifty = randNumGenerator(2)
    if (process.argv.length > 3) {
        if (fiftyorfifty == 1){
            return pet
        }
        else {
            return petopt
        }
    }
    else {
        return pet
    }

}

function getChildCount(){
    children = randNumGenerator(16)
    return children
}


function getCar(){
    caropt = process.argv[4]
    carlst = ["Tesla", "Bugatti", "Lamborghini", "Toyota"]
    if (process.argv.length > 2) {
        carlst = ["Tesla", "Bugatti", "Lamborghini", "Toyota", caropt]
    }
    carnum = carlst.length
    index = randNumGenerator(carnum)
    car = carlst[index]
    return car

}
x = mash()
console.log(x)
// let randNum = randNumGenerator(10);
// console.log(randNum);