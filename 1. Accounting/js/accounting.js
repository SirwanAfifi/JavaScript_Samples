window.addEventListener('load', fireUp, false);

function fireUp () {
    if ( document.getElementById('number') ) { //If brwoser support JavaScript
        var cost = document.getElementById('number').addEventListener('keydown', showResult, false);
        var currency = document.getElementById('currency').addEventListener('change', showCurrency, false);

        if ( cost && currency ) {
            var newCost = document.createTextNode(currency + cost);
            document.getElementById('result').appendChild(newcost);
        }
    }
}

function showResult (evt) {
    var insertedNumber = evt.target;
    return insertedNumber.value;
}

function showCurrency (evt) {
    var insertedCurrency = evt.target.options[evt.target.selectedIndex];
    return insertedCurrency.text;
}



