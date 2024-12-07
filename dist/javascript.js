

const AddTask = document.querySelector(".add-section");
const plus = document.querySelector(".icon3");

const cancel = document.querySelector(".cancel-button");


const input = document.querySelector(".add-input");
const addButton = document.querySelector(".add-button-x");

//plus.style.display = "none";

plus.addEventListener("click", function () {
    AddTask.style.display = "flex";



})


cancel.addEventListener("click", function () {
    AddTask.style.display = "none";
})




///////////////////////////////
//////////////////////////////






var tasksKey = [];
var tasks = [];
var completeTasks = [];
//alert(localStorage.key())
var item = localStorage.length;
let trucking = 0;
//localStorage.clear() 

function putlink() {
    //const link = docuument.getElementById("link");
    // link.setAttribute("src","edit2.js");
    window.location.reload();
}


function getLocalKey() {
    for (let i = 0; i < localStorage.length; i++) {

        let key = localStorage.key(i);



        if (!isNaN(Number(key))) {
            tasksKey.push(key);
            // alert("its a number");
        } else {
            completeTasks.push(key);
            //alert("its not a  number");
        }
        tasksKey.sort((a, b) => a - b)

    }
}
getLocalKey();






for (let i = 0; i < tasksKey.length; i++) {


    ///////////////////////////
    let value = localStorage.getItem(tasksKey[i]);
    // alert(localStorage.getItem(tasksKey[i]));


    //
    const newTask = document.createElement("div");
    newTask.setAttribute("id", tasksKey[i]);
    newTask.setAttribute("class", "task-1");

    const doneSquare = document.createElement("div");
    doneSquare.setAttribute("class", "task-square");

    const textTask = document.createElement("div");
    textTask.setAttribute("class", "text-task-title");

    const span = document.createElement("h1");
    span.setAttribute("class", "task-tilte");
    span.textContent = value;
    //alert(tasksKey[i]);

    const textGategory = document.createElement("div");
    textGategory.setAttribute("class", "text-gategory");

    const subDone1 = document.createElement("h1");
    subDone1.setAttribute("class", "primary-text-1");
    subDone1.textContent = "Design";

    const circle = document.createElement("div");
    circle.setAttribute("class", "task-circle");

    const subDone2 = document.createElement("h1");
    subDone2.setAttribute("class", "primary-text-1");
    subDone2.textContent = "Project";

    ////////////
    //const complete = document.createElement("button");
    //complete.textContent = "complete";
    //complete.classList.add("button");
    doneSquare.addEventListener("click", function () {
        span.setAttribute("class", "done-task-title");
        doneSquare.setAttribute("class", "task-done-square");

        let truck = newTask.getAttribute("id");
        let keyValue = localStorage.getItem(truck);
        localStorage.setItem(truck + "-", keyValue);
        localStorage.removeItem(truck);
        putlink();



        //  alert(keyValue);
    });

    //////////// Complete ^^^^^^^




    textGategory.appendChild(subDone1);
    textGategory.appendChild(circle);
    textGategory.appendChild(subDone2);

    textTask.appendChild(span);
    textTask.appendChild(textGategory);

    newTask.appendChild(doneSquare);
    newTask.appendChild(textTask);





    const tasksContainers = document.querySelector(".tasks");
    tasksContainers.appendChild(newTask);

    ////////////////

}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////



for (let i = 0; i < completeTasks.length; i++) {


    ///////////////////////////
    let value = localStorage.getItem(completeTasks[i]);
    // alert(localStorage.getItem(completeTasks[i]));


    //


    //alert(completeTasks[i]);
    // span.style.textDecoration = "line-through";
    ///////8888888888888888
    const newTask = document.createElement("div");
    newTask.setAttribute("id", completeTasks[i]);
    newTask.setAttribute("class", "task-1");

    const doneSquare = document.createElement("div");
    doneSquare.setAttribute("class", "task-done-square");

    const textTask = document.createElement("div");
    textTask.setAttribute("class", "text-task-title");

    const span = document.createElement("h1");
    span.setAttribute("class", "done-task-title");
    span.textContent = value;
    //alert(tasksKey[i]);

    const textGategory = document.createElement("div");
    textGategory.setAttribute("class", "text-gategory");

    const subDone1 = document.createElement("h1");
    subDone1.setAttribute("class", "sub-done-task-title");
    subDone1.textContent = "Design";

    const circle = document.createElement("div");
    circle.setAttribute("class", "task-circle");

    const subDone2 = document.createElement("h1");
    subDone2.setAttribute("class", "sub-done-task-title");
    subDone2.textContent = "Project";
    ///////////88888888888888888
    ////////////
    //const complete = document.createElement("button");
    // complete.textContent = "complete";
    // complete.classList.add("button");

    doneSquare.addEventListener("click", function () {
        span.setAttribute("class", "task-tilte");
        doneSquare.setAttribute("class", "task-square");

        let truck = newTask.getAttribute("id");
        let newTruck = truck.replace('-', '');

        let keyValue = localStorage.getItem(truck);

        localStorage.setItem(newTruck, keyValue);
        localStorage.removeItem(truck);
        putlink();



        // alert(newTruck);
    });

    //////////// Complete ^^^^^^^

    ///////////


    ///// Update ^^^^^^^




    textGategory.appendChild(subDone1);
    textGategory.appendChild(circle);
    textGategory.appendChild(subDone2);

    textTask.appendChild(span);
    textTask.appendChild(textGategory);

    newTask.appendChild(doneSquare);
    newTask.appendChild(textTask);


    const tasksContainers = document.querySelector(".tasks");
    tasksContainers.appendChild(newTask);

    ////////////////


}

//////////////////////////////////////////////////////
///////////////////////////////////////////////////////


addButton.addEventListener("click", createTask);

function createTask() {

    if (input.value === "") {
        alert("Enter un valeur");
        return;
    }

    function generateKey() {
        let largestKey = tasksKey[tasksKey.length - 1];


        if (tasksKey.length === 0) {
            return 1;

        } else {
            largestKey++;
            return largestKey;
        }


    }
    const inputValue = input.value;
    tasks.push(inputValue);
    item++;
    localStorage.setItem(generateKey(), inputValue);
    let key = generateKey();










    //////////////////////
    //////////////////////////////////////

    const newTask = document.createElement("div");
    newTask.setAttribute("id", item);
    newTask.setAttribute("class", "task-1");

    const doneSquare = document.createElement("div");
    doneSquare.setAttribute("class", "task-square");

    const textTask = document.createElement("div");
    textTask.setAttribute("class", "text-task-title");

    const span = document.createElement("h1");
    span.setAttribute("class", "task-tilte");
    span.textContent = inputValue;
    //alert(tasksKey[i]);

    const textGategory = document.createElement("div");
    textGategory.setAttribute("class", "text-gategory");

    const subDone1 = document.createElement("h1");
    subDone1.setAttribute("class", "primary-text-1");
    subDone1.textContent = "Design";

    const circle = document.createElement("div");
    circle.setAttribute("class", "task-circle");

    const subDone2 = document.createElement("h1");
    subDone2.setAttribute("class", "primary-text-1");
    subDone2.textContent = "Project";

    /////////////////////////////////////
    ////////////////////////////////////////
    ////////////
    //  const complete = document.createElement("button");
    // complete.textContent = "complete";
    //  complete.classList.add("button");
    doneSquare.addEventListener("click", function () {
        span.setAttribute("class", "task-tilte");
        doneSquare.setAttribute("class", "task-square");




        let truck = newTask.getAttribute("id");
        let keyValue = localStorage.getItem(truck);
        localStorage.setItem(truck + "-", keyValue);
        localStorage.removeItem(truck);
        putlink();


    });

    //////////// Complete ^^^^^^^

    //////////  >>>>>>>>

    //////////// ^^^^^^^




    textGategory.appendChild(subDone1);
    textGategory.appendChild(circle);
    textGategory.appendChild(subDone2);

    textTask.appendChild(span);
    textTask.appendChild(textGategory);

    newTask.appendChild(doneSquare);
    newTask.appendChild(textTask);



    const tasksContainers = document.querySelector(".tasks");
    tasksContainers.appendChild(newTask);




    input.value = "";
    getLocalKey();
}












