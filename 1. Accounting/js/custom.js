document.getElementById('number').addEventListener('input', function () {
    var selectedOption = getSelectedIndex(); // set a global variable to save changes later

    // If Input doesn't empty call change event on currency
    if( !this.value.match(/\S/) || !document.getElementById('new-cost').innerText.match(/\S/) ) {
        document.getElementById('currency').addEventListener('change', function() {
            selectedOption = getSelectedIndex();
            document.getElementById('new-currency').innerText =  selectedOption;
        }, false);
    }

    document.getElementById('new-cost').innerText = this.value;
    /* Check if Input doesn't empty */
    document.getElementById('new-currency').innerText = checkInput(this.value, selectedOption);
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










