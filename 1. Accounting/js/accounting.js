document.getElementById('number').addEventListener('input', function () {

    var select = document.getElementById('currency');
    var selectedOption = select.options[select.selectedIndex].text;
    var result = document.getElementById('new-cost')
    if (this.value != null) {
        //result.innerText = this.value + " " + selectedOption;
        alert('hello')
    } else {
        result.innerText
    }

}, false);


