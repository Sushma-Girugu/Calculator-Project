function append(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function backspace(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate(){

    let expression = document.getElementById("display").value;

    if(expression === ""){
        return;
    }

    try{

        let result = eval(expression);

        let historyItem =
            document.createElement("li");

        historyItem.textContent =
            expression + " = " + result;

        document
            .getElementById("history")
            .prepend(historyItem);

        document.getElementById("display").value =
            result;

    }
    catch(error){
        alert("Invalid Expression");
    }
}