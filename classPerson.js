class abebe  {
    constructor (name, newName) {
        this.name = name;
        this.newName = newName; 
    }
} 


const fullName =  new abebe("Amanuel" , "Tesfay");



console.log(fullName)

function taxeCalulater (price) {

    const taxe = (price * 5) / 100;
    const total = price - taxe; 
    console.log("Total after tax : "  + total)
}

taxeCalulater(700); 

const test = "Test" 

function list () {

    const test = "Fuck off"
    
    console.log(`${test}`) ;

    function newOne(outerTest) {
        let test = "Get lost"
        // let inherit = new list; 
        // return `${inherit.test}`+ ` ${test}`
        console.log (`This is a new Function called ${outerTest}` )
    }

    newOne(test);

    return
}

list()


const arrowFunction = listTwo => {
    if ( typeof listTwo == 'string') {
        console.log("Yeaa I am string");
        // return true;
} else {
    console.log ("No way man, I can't bee string");
    // return false;
}

}

arrowFunction(78);


const number = [1, 2, 3, 4, 10]
    

let numbere = number.reduce((element, accumlator) => (element + accumlator)); 

console.log(numbere);

let argumentOne  = function () {
    console.log(arguments);
}

let argumentTwo = () => {
    console.log (arguments);
}

argumentOne(7, "this", 78)
// argumentTwo(7, "this", 78)


let studentResult = (pass, grade) => {
    if(grade > pass) 
        console.log(` You pass the exame` )
    
    else  console.log (`You don't pass the exam`)

}

studentResult(`${abebe.fullName} 40, 50`)


function checkpass (passOne, passTwo) {
   
passOne == passTwo ? console.log("Password mach") : console.log("Passwords dosen't mach")

}

checkpass(123, 13)


function dayCheckerOne(day) {

    let dayName; 

switch (day) {
    case 1:
        dayName = "It is Monday";
        break;

    case 2: 
    dayName = "It is Thusday";
        break; 

    default :
    dayName = "It is not Monday or Thursday";

}

console.log(dayName)

}

dayCheckerOne(10)


function point (win, draws, losses) {
    let winPoints = win * 3 ;
    let drawPoints = draws * 1;
    let lossPoints = losses * 0;
    return `Team has ${winPoints + drawPoints + lossPoints } points`
    
    // let points = win * 3 + draws + losses;
   
    // return `Your team has ${points} points`;

    
        
}

console.log(point(10,1,9))

  

function calcAge(age) {
	let totalDateOfAge = age * 365;
	
	return `Total date of your age is ${totalDateOfAge}`; 
	
}

console.log(calcAge(20)); 

let numberWhile = "#";

while ( numberWhile <= 12) {
    console.log(numberWhile) 

    numberWhile += 2
}

// Define the number of rows
// const numRows = 7;

// let chaseBord = " "

// for (let row = 0; row < numRows; row++){
//     for(let col = 0; col < numRows; col++)
//     if((row + col) % 2 === 0){
//             chaseBord += ' '
//             } else {
//                 chaseBord += '#'
//             }

//             chaseBord += '\n'
// }
// console.log(chaseBord);




    function power (base, exponent = 2) {
        let result = 1;
        for (let count = 0; count < exponent; count++) {
            result *= base;
        }
        return result;
        };

        console.log(power(5)); 
        console.log(power(3, 3))


        let newObject = {
            name: "John",
            age: 30,
            city: "New York",
           
            new: function  () {
                let newtext = "The name of the auther "
                
                console.log(`Name : ${this.name} age : ${this.age} city : ${this.city}`)
            }
              
        }

        console.log(newObject.name)
        newObject.new()


        function Student (firstName, MidleName, LastName) {
            this.FirstName = firstName;
            this.MidleName = MidleName;
            this.LastName = LastName;
            this.fullName = function() {
                let fullName = "Student Full Name is : "
                return ` ${fullName} ${this.FirstName +" "+ this.MidleName +" "+ this.LastName}`
                }
                }
                let obj = new Student("Ahmed","Ali","Abdulazi")

                console.log(obj.fullName())

function Car (carName,carModel, carWeight, carColor) {
    this.Name = carName;
    this.model = carModel + "Kg";
    this.weight = carWeight;
    this.color = carColor;

    this.start = function () {
        if (this.weight > 5000 ) {
            console.log ("This car can not start because it's too heavy");
            } else{

                console.log (`Car Name : ${this.Name}, Model : ${this.model}`);
            }
    }
}

    const myFiat = new Car ("Fiat", "V8" ,400, "Red" )
    const myTesla =  new Car ("Tesla", "Tesla Model 3" , 350, "White")
    
    // myCar.start()
    console.log(myFiat)
    console.log(myTesla.start)


    let arrayObjects = ["Banana", "Mango", "Onion", "carot"]
    console.log(arrayObjects);
    // arrayObjects.push("Tomato");
    // console.log(arrayObjects); 
    arrayObjects.pop();
    console.log(arrayObjects); 

    Math.round(70.2); 
    console.log(Math.round(70.5));

    const fruit = [{name: "Banana", calories: 100,  type: "fruit",   color: "Yellow"},
                   {name: "Mango",  calories: 90,   type: "fruit",   color: "green and yellow"},
                   {name: "biff",  calories: 60,   type: "meat",    color: "Red"},
                   {name: "Grape",  calories:100,   type: "fruit",   color: "Green"},               
                   {name: "Orange",  calories: 95,   type: "fruit",   color: "Orange"},               
                   {name: "Apple",  calories: 95,   type: "fruit",   color: "Green"},               
                   ];
                //    for (let i = 0 ;i < fruit.length; i++){
                //     if(fruit[i].type==="fruit"){
                //         console.log(`I like ${fruit[i].name} which has ${fruit[i].calories} calories`);
                //     }
                //         else {
                //             console.log(`I don't eat ${fruit[i].name}. It's not good for health`)
                //         }
                   
                //     }
// const fruitFilter = fruit.filter( fruit => fruit.calories <= 90)

const reduceFruit = fruit.reduce( (accumlator, fruit) => fruit.calories > accumlator.calories ? fruit : accumlator ) 
console.log(reduceFruit.calories)

// console.log(fruitFilter)

// let loop = 0;

// fruit.forEach(fruit => {
//     loop += fruit.calories
// })

// console.log(loop)



//  const totalCalories =  fruit.reduce((item, fruit) => {
//     console.log(`Item: ${item}`)
//     console.log(`fruit Calorie ${fruit.calories}`)
//   return  item +=fruit.calories; 

// }, 0)

// console.log("Total calore: " + totalCalories); 

const listCalory = fruit.reduce((item, fruit) => {
    let cal = fruit.calories; 
    console.log("Check" + cal)
   if (item[cal] == null) item[cal] = []
    item[cal].push(fruit)
    return item;
    }, {})
 console.log(listCalory)
 
    const fruitMap = fruit.map((fruit) => {
        return fruit.name 
    })

    console.log(fruitMap); 

    const fruitFind = fruit.find((fruit) => {
        return fruit.name === "Mango"
    })

    console.log(fruitFind); 

    const numberOfCaloris = fruit.some((fruit)=> {
        return fruit.calories < 0
    })
    console.log(numberOfCaloris);
    
    const sortFruits = fruit.sort((a, b) =>{
        return a.name - b.name
        });
        console.log(sortFruits);

            // Distructuring 

        const arrryOne = [ "A", "B", "C", "D","E"]
        const arryTwo =  ["1", "2", "3", "4", "5"]

        const [a,,c, ...rest] = arrryOne
       const newArry = [...arrryOne, ...arryTwo]

        console.log(a)
        console.log(c)
        console.log(rest)
        console.log(newArry)


function sumAndMultiply (a, b) {
    return [a + b, a * b];

   }
   
const [sum, multiply, divsion = "This system dose not work devsion"] = sumAndMultiply(2, 3);

   console.log(sum)
   console.log(multiply)
   console.log(divsion)

const testObj = {
    sname: 'John',
    age: 30,
    city: 'New York',
    address: {
        street: 'Central st',
        number: 666
        },
    }

    const {name: sname = "Amanuel" , age: sage, city, address: {street}} = testObj 

    console.log(sname)
    console.log(sage)
    console.log(city)
    console.log(street)

    
let num = [-12.25, 10, 20, 60, 100]; 
let num3 = 12
let result = Math.min(-12.25, 10, 20, 60, 100)

console.log(result)

function getNUmber (max, min) {
    const bigInt = BigInt(min)
    
    return Math.floor(Number(bigInt) + Math.random() * (max - Number(bigInt)+ 1)); 
}

console.log(getNUmber(0, "100000000000000000000"))

let myString = "ASGaO#$%PAS746ImASaFFEJK34nDuSE3634eASKJl";
let splitString = myString.split('')
// let joinString = " ";

let joinString = splitString.filter(
    (smallString) => smallString !== smallString.toUpperCase()
).join("")


//  for (let i = 0; i < myString.length; i++ ) {
//   if (myString[i] !== myString[i].toUpperCase()) {
//     joinString += myString[i]; 
//    } 

//    if (joinString.trim() !== "") {
//     modifiedString = joinString.charAt(1).toUpperCase() + joinString.slice(2);
// }

// }

console.log("Affter concatination of the words : " +  joinString)



  

const compareArrays = function sortArray(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0) {
        // Handle cases where arrays are empty
        console.log("Arrays are empty");
        return;
    }


    let isFirstGreaterArrayOne = Math.min(...arr1);
    let isFirstGreaterArrayTwo = Math.min(...arr2);

    let isLastGreaterArrayOne = Math.max(...arr1);
    let isLastGreaterArrayTwo = Math.max(...arr2);

    if (isFirstGreaterArrayOne > isFirstGreaterArrayTwo && isLastGreaterArrayOne > isLastGreaterArrayTwo) {
        console.log(true)
    }

        else {
            console.log(false)
        }


    // let isFirstGreater = arr1[0] > arr2[0];
    // let isLastGreater = arr1[arr1.length - 1] > arr2[arr2.length - 1];

    // if (isFirstGreater && isLastGreater) {
    //     console.log("First element of the first array is greater than the first element of the second array,");
    //     console.log("and the last element of the first array is greater than the last element of the second array.");
    // } else {
    //     console.log("Comparison conditions not met.");
    // }
}

// Example usage:
let arr1 = [50, 200, 80, 100];
let arr2 = [3, 7, 10, 15];

compareArrays(arr1, arr2);


//Sort
// let newArray =  [ 23, 45, 4543, 6547, 100, 256, 456] 
// let newArrayString =  [ "a" , "r", "c", "t", "q"] 

// newArray.sort((a, b) => a -b);

// console.log(newArray)


function sortNUmber (ListNumbers) {

    let checker = true;
    while (checker){
        checker = false;
        console.log(checker)
    for (let i = 0; i < ListNumbers.length - 1; i++) {
        if (ListNumbers[i] > ListNumbers[i + 1]) {
            var temp = ListNumbers[i];
            checker = true;
            ListNumbers[i]= ListNumbers[i + 1];
            ListNumbers[i] = temp;
            }
            }
            return ListNumbers;

            }
}
            console.log(sortNUmber([9, 8, 21, 7, 6, 45, 5, 90]))



    //Sorrt 

    let listOfFruits = ["Banana", "Orange", "Apple", "Mnago"]

    listOfFruits.sort(); 
    console.log(listOfFruits)

    listOfFruits.reverse();
    console.log(listOfFruits)

    const points = [40, 100, 1, 5, 25, 10];
    let numberSort = points.sort(function(a, b){return a - b});

    console.log(numberSort)


 function doubledNUmber() {
    let number = [1,  2,  3,  4,  5];

    for (let i = 0; i < number.length; i++) {
        number[i] *= 2;
        }
        return number;
        }
        console.log(doubledNUmber())  


let mapNumber = [ 8, 10, 20, 15]

const doubledNumbers = (x) => x * 10

const outPut = mapNumber.map(doubledNumbers)
console.log(outPut)

function fliterOutPut (fn){
    return fn % 2;
}

const filterNumber = mapNumber.filter(fliterOutPut);

console.log(`This numbers are ${filterNumber}`)

let reducingNumber = mapNumber.reduce(function (accumlator, current) {
    return accumlator += current;

});

console.log(reducingNumber);


const maxNumber = function (mapNumber) {
    let max = 0;
    for (let i = 0; i < mapNumber.length; i++) {
        if (mapNumber[i] > max) {
            max = mapNumber[i];
        }
    }

    return max;
};

console.log(maxNumber(mapNumber)); 

let maxNumberReducing = mapNumber.reduce(function (max, accr) {
    if (accr > max) {
        max = accr;
       }

       return max; 
});

console.log(maxNumberReducing);




