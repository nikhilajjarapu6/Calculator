let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}
function backspace() {
        displayValue = displayValue.slice(0, -1);
        document.getElementById("display").value = displayValue;
    }

function calculate() {
    try {
        const result = eval(displayValue);
        document.getElementById("display").value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}










// function appendToDisplay(value) {
//         displayValue += value;
//         document.getElementById("display").value = displayValue;
// }
// 



// function clearDisplay() {
//     displayValue = "";
//     document.getElementById("display").value = "";
// }

// function calculate() {
//        console.log("ewjjdgew");
//         const operators = displayValue.match(/[+\-*/]/g);
//         const numbers = displayValue.split(/[+\-*/]/).filter(Boolean).map(Number);

//         if(numbers.length==1){
//             document.getElementById("display").value=numbers[0];
//             return;
//         }
//         console.log("operators:", operators);
//         console.log("numbers:", numbers);

//         if ( operators.length >0 && numbers.length <2) {
//             document.getElementById("display").value = "Error";
//             displayValue = ""; 
//             console.log('error')
//             return;           
//         }


//         let result=numbers[0];
//         for(let i=0;i<operators.length;i++){
//             var operator=operators[i];
//             var nextNumber=numbers[i+1]
//             if(operator==='+'){
//                 result=result+nextNumber;  
//             }
//             else if(operator==='-'){
//                 result=result-nextNumber;
//             }
//             else if(operator==='*'){
//                 result=result*nextNumber;
//             }
//             else if (operator === '/') {
//                 if (nextNumber === 0) {
//                     document.getElementById("display").value = "Error: Division by zero";
//                     return;
//                 }
//                 result = result / nextNumber;
//             }            
            
//         }
//         document.getElementById("display").value = result;
//         displayValue = result.toString();

       

// }

