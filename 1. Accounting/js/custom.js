document.getElementById('number').addEventListener('input', function () {
    // two global variable for using later
    var selectedOption = getSelectedIndex();
    var inputedText = this.value;

    document.getElementById('currency').addEventListener('change', function() {
        selectedOption = getSelectedIndex();
        /* Check if Input doesn't empty */
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

