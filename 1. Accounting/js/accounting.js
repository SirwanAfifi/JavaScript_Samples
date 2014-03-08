<<<<<<< HEAD
window.addEventListener('load', fireUp, false);

function fireUp () {
    if ( document.getElementById('number') ) { //If brwoser support JavaScript
        document.getElementById('number')
            .addEventListener('input', showResult, false);
=======
document.getElementById('number').addEventListener('input', function () {

    var select = document.getElementById('currency');
    var selectedOption = select.options[select.selectedIndex].text;

    document.getElementById('new-currency').innerText = this.value;
    if (!this.value.match(/\S/)) {
        document.getElementById('new-cost').innerText = '';
        return false;
    } else {
        document.getElementById('new-cost').innerText = selectedOption;
        return true;
>>>>>>> fe04211926e6487473dc188345a498053753efc9
    }

<<<<<<< HEAD
    /* Set a default currency for outputed number */
    var insertedCurrency = document.getElementById('currency');
    document.getElementById('new-currency').innerText = insertedCurrency
        .options[insertedCurrency
        .selectedIndex].text;
    document.getElementById('currency')
        .addEventListener('change', showCurrency, false);

}

function showCurrency (evt) {
    var insertedCurrency = evt.
        target.
        options[evt.target.selectedIndex].text;
    var newCurrency = document.createTextNode(insertedCurrency);
    var target = document.getElementById('new-currency');

    if ( target.hasChildNodes() ) {
        target.removeChild(target.firstChild);
    }
=======
>>>>>>> fe04211926e6487473dc188345a498053753efc9

}, false);

document.getElementById('currency').addEventListener('change', function () {

    var select = document.getElementById('currency');
    var selectedOption = select.options[select.selectedIndex].text;

    document.getElementById('new-cost').innerText =  selectedOption;

<<<<<<< HEAD

=======
}, false);
>>>>>>> fe04211926e6487473dc188345a498053753efc9
