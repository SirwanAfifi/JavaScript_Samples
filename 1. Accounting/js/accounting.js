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
    }


}, false);

document.getElementById('currency').addEventListener('change', function () {

    var select = document.getElementById('currency');
    var selectedOption = select.options[select.selectedIndex].text;

    document.getElementById('new-cost').innerText =  selectedOption;

}, false);


