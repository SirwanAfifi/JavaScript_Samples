function FireEvent() {
    var select = document.getElementById('sign');
    var selectedOption = select.options[select.selectedIndex].text;
    var number = document.getElementById('number').value;
    document.getElementById('result').innerText = number + " " + selectedOption;
}