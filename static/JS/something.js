document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#button_inc').onclick = count;
    document.querySelector('#button_dec').onclick = decrease;
    
    document.querySelector('#form1').onsubmit = function() {
        const name = document.querySelector('#name1').value;
        alert(`Hello ${name}!`);
    };

    document.querySelectorAll('.color-change').forEach(function(button) {
        button.onclick = function() {document.querySelector('#colorful').style.color = button.dataset.color;}
    });

    document.querySelector('#color-change-dropdown').onchange = () =>
        document.querySelector('#hello').style.color = this.value;

    // This is a comment.
});

let counter = 0;

function count() {
    counter++;
    document.querySelector('#counter').innerHTML = "Counter: " + counter;
    if (counter % 10 === 0) {alert(`Counter is at ${counter}!`);}

}

function decrease() {
    counter--;
    document.querySelector('#counter').innerHTML = "Counter: " + counter;
    if (counter % 10 === 0) {alert(`Counter is at ${counter}!`);}
}