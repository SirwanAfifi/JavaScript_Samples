if (window.addEventListener) {
    document.getElementById('number').addEventListener('input', function () {

        var select = document.getElementById('currency');
        var selectedOption = select.options[select.selectedIndex].text;
        var result = document.getElementById('new-cost')
        if (this.value != null) {
            alert('hello')
        } else {
            result.innerText
        }

    }, false);
} else if(window.attachEvent) {
    document.getElementById('number').attachEvent('input', function (e) {

        var select = document.getElementById('currency');
        var selectedOption = select.options[select.selectedIndex].text;
        var result = document.getElementById('new-cost')
        if (this.value != null) {
            alert('hello')

        } else {
            result.innerText
        }

    });
}








