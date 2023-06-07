var $ = function (id) {
    return document.getElementById(id);
}

class CoinCalculatorUI {
    constructor() {}

    addErrorMessage = ((message) => {
        $("message").innerHTML = `<div class="errorMessage">${message}</div>`;
    });
}

var calculate_click = function()
{ 
    const ui = new CoinCalculatorUI();
    ui.addErrorMessage('This feature has not been implemented');
}

$("calculate").addEventListener("click", calculate_click);
