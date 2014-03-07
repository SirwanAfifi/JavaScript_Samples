
function FireEvent() {
    var select = document.getElementById('sign');
    var selectedOption = select.options[select.selectedIndex].value;
    var number = document.getElementById('number').value;
    document.getElementById('result').innerText = number + " " + selectedOption;
}