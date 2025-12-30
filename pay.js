const toggle = document.getElementById('toggle');
const toggle2 = document.getElementById('toggle2');
const toggle3 = document.getElementById('toggle3');
const toggle4 = document.getElementById('toggle4');
const btn = document.getElementById('btn');

const result = document.getElementById('result');
const result2 = document.getElementById('result2');

  btn.onclick = function() {
    if (toggle.checked) {
        result.textContent = "Hello user! You are subscribed!";
    } else {
        result.textContent = " Hello user! You are not subscribed.";
    }

    if(toggle2.checked) {
        result2.textContent = " Payment method: Visa";
    } else if (toggle3.checked) {
        result2.textContent = " Payment method: Mastercard";
    } else if (toggle4.checked) {
        result2.textContent = " Payment method: Paypal";
    } else { 
        result2.textContent = " No payment method selected, please choose one.";
    }
}
