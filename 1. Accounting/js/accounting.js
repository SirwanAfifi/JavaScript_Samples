window.addEventListener('load', fireUp, false);

function fireUp () {
    if ( document.getElementById('number') ) { //If brwoser support JavaScript
        document.getElementById('number').addEventListener('input', showResult, false);
        document.getElementById('currency').addEventListener('change', showCurrency, false);
    }
}

function showResult (evt) {
    var insertedNumber = evt.target.value;
    var newCost = document.createTextNode(insertedNumber);
    var target = document.getElementById('new-cost');

    if ( target.hasChildNodes() ) {
        target.removeChild(target.firstChild);
    }

    target.appendChild(newCost);

}

function showCurrency (evt) {
    var insertedCurrency = evt.target.options[evt.target.selectedIndex].text;
    var newCurrency = document.createTextNode(insertedCurrency);
    var target = document.getElementById('new-currency');

    if ( target.hasChildNodes() ) {
        target.removeChild(target.firstChild);
    }

    target.appendChild(newCurrency);

}



