// let changeColor = document.getElementById("four");

// changeColor.className = "green"

// document.getElementById("one").className = "blue"

// console.log(document.querySelector(".red"));

// let classNameGeter = (document.getElementsByClassName("red"))

//     console.log(classNameGeter.item[0]); 

//     console.log(document.querySelectorAll("h1"))

// console.log(document.getElementsByTagName("h1")); 


// let li = document.querySelectorAll(".green")

// for  (var i=0; i<li.length; i++){
//    var selecetName = li[i]
//    selecetName.className ="red"

//   }


  // let texAdd = document.createElement("a")
  // texAdd.setAttribute("href", "://www.metabira.com"); // specify the URL")
  // texAdd.classList.add("meta-class", "next-class", "red")
  // texAdd.textContent = "Meta Bira"
  // document.body.appendChild(texAdd)

  // /* text content */

  // let textContentChanger = document.getElementById("two")

  // textContentChanger.textContent = "Jira"
  /* append child*/


  // createNewPerson () {
  //   let newLi = document.createElement('li')
  //   newLi.textContent = `John Doe is ${Math.floor(Math.random() * 5)} years old.`
  //   document.querySelector("#persons").append(newLi);
  // }

  // persons = document.querySelectorAll('#persons li');

  // for (let i = 0; i < persons.length; i++) {
  //     persons[i].addEventListener('click', function(){
  //         this.style.color='blue';
  //     });
  // };

// const grandparent = document.getElementById("grandparent-id");

// const parents = Array.from(document.getElementsByClassName("parent"));

// const querySelectorL = document.querySelectorAll(".parent");
// const parentOne =  querySelectorL[0];

// const child = parentOne.children

// // querySelectorL.style.backgroundColor = "#444"

// // changeColor(grandparent)
// changeColor(child[1]); 


 
// const grandParentChildren = grandparent.querySelectorAll(".child")

// let chaildFour = document.querySelector("#child-four")
// let chaildTwo  = chaildFour.nextElementSibling;
// let parent = chaildFour.parentElement;
// let grandParent = parent.parentElement;

// changeColor(chaildTwo.previousElementSibling)
// // changeColor(chaildFour)


// function changeColor (element ) {

//   element.style.backgroundColor = "#fff";

// }

//let selects = document.querySelectorAll("#one, #two , #three")

// selects.forEach((element) => {
//   parentProdact.removeChild(element)
// });

// let parentProdact = document.querySelector(".nubersList")

// let newLi= document.createElement('h1');
// console.log(newLi)
// newLi.classList.add("green");
// newLi.textContent ="Ali Baba";

// let  listofHOne = document.querySelector("#two")

// listofHOne.after(newLi)
// listofHOne.before(newLi)
// parentProdact.removeChild(listofHOne)


// console.log(parentProdact.hasAttribute("class")); 
// newLi.textContent = " Face book ";

// // parentProdact.appendChild(newLi);

// let button = document.getElementById("btn-one")
// // button.onclick = firstClick; 

// button.addEventListener("click", firstClick)
// function firstClick() {
//   const firstBtn = document.getElementById("btn-one");
//   firstBtn.style.backgroundColor = '#456df4';
// }

// let ancerTage = document.getElementsByTagName("a")[0]

// ancerTage.addEventListener("click", function(e) {
//  e.preventDefault();
//   document.getElementsByTagName("a")[0].textContent = "Hellow World"
// } ) 

// document.querySelector("#registration-form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   let firstNameInput = document.querySelector("#firstName");
//   let lastNameInput = document.querySelector("#lastName");

// if (firstNameInput.value.trim() === "" || lastNameInput.value.trim() === "" )
 
//     alert("Please fill all fields ");
//     firstNameInput.style.backgroundColor = lastNameInput.style.backgroundColor = "pink"

//   }  else {
//     alert("Thanks for subscribing!");
//     document.getElementById("result").textContent = `${firstNameInput.value} ${lastNameInput.value}`;
//   }
// });

  // if (formInput[0].value.length !== 0  && formInput[1].value.length !== 0){
  //   alert("Thanks for subscribe")

  // let concatName = formInput[0].value + " " + formInput[1].value;

  //   let result = document.getElementById("result");
  //   result.textContent = concatName;
  //     }
  // });


  

// document.getElementById("registration-form").addEventListener("submit",
// function (e) {
//   e.preventDefault(); 

//   let firstNameInpute = document.querySelector("#firstName");
//   let lastNameInpute = document.querySelector("#lastName");

//   if (firstNameInpute.value.trim() === "" || lastNameInpute.value.trim() === "")
  
//   {
//     alert("All Filldes Are Reqaured");
//     firstNameInpute.style.backgroundColor = lastNameInpute.style.backgroundColor = "pink"
//   } else {
//         alert("Submited Sucessfully Please Check Your Email")
//         document.getElementById( "result" ).textContent = `${firstNameInpute.value} 
//         ${lastNameInpute.value}`
        
//   }

// })

// console.log("This fisrt call")

// const asynchronousMethoud = function (sec) {
//       setTimeout (() => {
//         console.log(`Asynchronous Method Called After ${sec} Sec`), sec * 10
//       }, sec);
// }

// asynchronousMethoud(3000)

// console.log("I am the last on")

// fetch("https://randomuser.me/api").then( function (res) {
//   // console.log(res)
//   return  res.json();
// }).then((data) => console.log(data)); 


// fetch("https://randomuser.me/api")
// .then((res) => res.json())
// .then((data) => console.log(data.results[0]))
// .catch(err => console.log('Error', err)); 

async function logData() {
  try {
    let response = await fetch("https://randomuser.me/api");
    let data = await response.json();
    const user = data.results[0];
    console.log(user);
  } catch (error) {
    console.log('There is an error');
  }
}

logData()

let mypromise = new Promise((resolve, reject) => {
  const condtion = 5 - 5;
  if (condtion == 0) {
    resolve ("The condition is true");
  } else {
    reject ('Condition failed')
  }
});

mypromise.then((result) => console.log(result))
         .catch((error) => console.log(error));

function alarm (person, delay) {
return new Promise ((resolve, reject) => {

  if (delay < 0) {
    reject("Alarm delay can not be negative");
  }
  setTimeout(() => {
    resolve(`Wake up, ${person}!`);
  } , delay);
})};

// alarm("John", 2).then(result => console.log(result))
// .catch(error => console.log(error));


async function getUp() {
  try {
    let data = await alarm("Bob", -1000);
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}

getUp();

async function displayData() {
  try {
    let response = await fetch("https://randomuser.me/api");
    let data = await response.json();
    let user = data.results[0];

    console.log(user.name);

    const userContainer = document.getElementById("container");
    userContainer.innerHTML = `
        <img src="${user.picture.large}" alt="User Image">
        <h3> Name: ${user.name.first} ${user.name.last}</h3>
        <h3> Email: ${user.email}</h3>
        <h3> Location: ${user.location.city}, ${user.location.country} </h3>
    `;
  } catch (error){
    console.log(error)
  }
}
displayData();




let stocks = {
  fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Chocolate", "Peanuts"]
};

let order = (fruit_name, call_prodaction) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} has been selected`);
    call_prodaction();
  }, 2000);
};

let prodaction = () => {
  setTimeout(() => {
    console.log("Prodaction has started");

    setTimeout(() => {
      console.log("The fruit has been chopped");

      setTimeout(() => {
        console.log(
          `${stocks.liquid[0]} and ${stocks.liquid[1]} was been selectd}`
        );
        setTimeout(() => {
          console.log("The machine was started");

          setTimeout(() => {
            console.log(`ice cream was pleased on ${stocks.holder[0]} `);
          });

          setTimeout(() => {
            console.log(`${stocks.toppings[0]} was added a toppings`);
            setTimeout(() => {
              console.log("Serve ice cream");
            }, 2000);
          }, 3000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0o0);
};
order(2, prodaction);
