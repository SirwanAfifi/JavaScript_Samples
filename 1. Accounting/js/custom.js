document.getElementById('number').addEventListener('input', function () {
    var selectedOption = getSelectedIndex(); // set a global variable to save changes later
    var inputedText = this.value;
    // If Input doesn't empty call change event on currency
    document.getElementById('currency').addEventListener('change', function() {
        selectedOption = getSelectedIndex();
        document.getElementById('new-currency').innerText =  checkInput(inputedText, selectedOption);
    }, false);


    document.getElementById('new-cost').innerText = inputedText;
    /* Check if Input doesn't empty */
    document.getElementById('new-currency').innerText = checkInput(inputedText, selectedOption);
}, false);

function getSelectedIndex () {
    var select = document.getElementById('currency');
    return select.options[select.selectedIndex].text;
}

function checkInput (inputNumber , selectedOption) {
    if ( !inputNumber.match(/\S/) ) {
        return "";
    }
    else {
        return selectedOption;
    }
}

