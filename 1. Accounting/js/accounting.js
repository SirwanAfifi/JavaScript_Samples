window.addEventListener('load', selectedItem, false);

function selectedItem () {
    var oCurrency = document.getElementById('currency');
    if ( oCurrency ) {
        oCurrency.onchange = selectedText(oCurrency);
        alert(oCurrency.onchange);

    }
}

function selectedText (oCurr) {
    var sOption = oCurr.options[oCurr.selectedIndex].text;
    return sOption;
}