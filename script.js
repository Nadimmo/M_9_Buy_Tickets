let currentCount = 0;
let count = 0;
const buttons = document.getElementsByClassName('button');
// console.log(btn)
for(let button of buttons ){
    // console.log(button);
    button.addEventListener('click', function(event){
        const text = event.target.innerText;
        // console.log(text)
        event.target.style.backgroundColor = '#1DD100';
        event.target.setAttribute('disabled', false)
        
        // alert message then 4 button click
        count++
        if(count >= 4){
            alert("Your Limit is End")
            disableButtons()
            // return
        }


        // current table
        const table = document.getElementById('table');
        // console.log(table)
        // create table
        const tableRow = document.createElement('tr');
        const seat = document.createElement('td');
        seat.innerText = text;
        const seatClass = document.createElement('td');
        seatClass.innerText = "Economy";
        const seatPrice = document.createElement('td');
        seatPrice.innerText = "550";
        tableRow.appendChild(seat);
        tableRow.appendChild(seatClass);
        tableRow.appendChild(seatPrice);
        // append in current table
        table.appendChild(tableRow);

        // current seat number
        const currentSeat = ConvertToNumber('seatNumber');
        const updateSeat = currentSeat +1;
        // update seat
        document.getElementById('seatNumber').innerText = updateSeat;
        // console.log(updateSeat)

        // current left seat
        const currentLeftSeat = ConvertToNumber('currentSeat');
        // update left seat
        const updateLeftSeat = currentLeftSeat - 1;
        document.getElementById('currentSeat').innerText = updateLeftSeat;

        // current price
        const currentPrice = ConvertToNumber('currentPrice');
        // update price 
        const updatePrice = parseInt (seatPrice.innerText);
        const finalPrice = currentPrice + updatePrice;
        document.getElementById('currentPrice').innerText = finalPrice;
        // console.log(currentPrice,updatePrice, finalPrice)
        updateGrandTotal()
        // console.log(updateSeat)

        // condition
        currentCount++;
        if(currentCount >= 4){
            document.getElementById('apply').disabled = false;
        }
        

    })
}


// next page
function nextPage(){
    hiddenElementByID("main");
    hiddenElementByID("footer");
    hiddenElementByID("header");
    showElementByID("success");
}

function Continue(){
    hiddenElementByID("success");
    showElementByID("main");
    showElementByID("header");
    showElementByID("footer")
}


function updateGrandTotal(status){
    const currentPrice = ConvertToNumber('currentPrice');
    const grandTotal = ConvertToNumber('grandTotal');
    if(status == undefined){
        document.getElementById('grandTotal').innerText = currentPrice;
    }else{
        const CouponCode = document.getElementById('CouponCode').value;
        if(CouponCode == "NEW15"){
            const discount = currentPrice * .15;
            const finalDicount = currentPrice - discount;
            document.getElementById('grandTotal').innerText = finalDicount;
        } 
    else{
            alert("Your Coupon Code is Valid!")
        }
    }

}



function ConvertToNumber(id){
    const element = document.getElementById(id)
    const convert = parseInt(element.innerText);
    return convert;
}

function disableButtons(){
    let buttons = document.querySelectorAll('#btn');
    buttons.forEach(function(button){
        if(!button.classList.contains('disabled')){
            button.classList.add('disabled');
        }
    })
}


const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const nextButton = document.getElementById("Nextbtn");

nameInput.addEventListener("input", checkInputs);
phoneInput.addEventListener("input", checkInputs);
emailInput.addEventListener("input", checkInputs);

function checkInputs() {
    if (nameInput.value.trim() !== "" && phoneInput.value.trim() !== "" && emailInput.value.trim() !== "") {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
}

function hiddenElementByID(elementID){
    let element = document.getElementById(elementID);
    element.classList.add('hidden')
}
function showElementByID(elementID){
    let element = document.getElementById(elementID);
    element.classList.remove('hidden')
}