document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#button_inc').onclick = count;
    document.querySelector('#button_dec').onclick = decrease;
    
    document.querySelector('#form1').onsubmit = function() {
        const name = document.querySelector('#name1').value;
        alert(`Hello ${name}!`);
    };

    document.querySelector('#form-fx').onsubmit = () => {
        // Initialize new request
        const request = new XMLHttpRequest();
        const currency = document.querySelector('#currency').value;
        request.open('POST', '/convert');

        // Callback function for when request completed
        request.onload = () => {

            // Extract JSON data from request
            const data = JSON.parse(request.responseText);

            // Update the result div
            if (data.success) {
                const contents = `1 USD is equal to ${data.rate} ${currency}.`;
                document.querySelector('#result-fx').innerHTML = contents;
            }
            else document.querySelector('#result-fx').innerHTML = 'There was an error.';
        }

        // Add data to send with request
        const data = new FormData();
        data.append('currency', currency);

        // Send request
        request.send(data);
        return false;
    }


    document.querySelectorAll('.color-change').forEach(function(button) {
        button.onclick = function() {document.querySelector('#colorful').style.color = button.dataset.color;}
    });

    document.querySelector('#color-change-dropdown').onchange = function() {
        document.querySelector('#color-dropdown').style.color = this.value;}
    
    //by default, submit button is disabled
    document.querySelector('#new-task-button').disabled = true;

    //enable button only if there is text in the input field
    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0)
            document.querySelector('#new-task-button').disabled = false;
        else
            document.querySelector('#new-task-button').disabled = true;
    };

    document.querySelector('#new-task').onsubmit = () => {
        //create new item for list
        const li = document.createElement('li');
        li.innerHTML = document.querySelector('#task').value;

        //add new item to task list
        document.querySelector('#tasks').append(li);

        //clear input field and disable button again
        document.querySelector('#task').value = '';
        document.querySelector('#new-task-button').disabled = true;

        //stop form from submitting
        return false;
    };

    setInterval(count2, 1000);

    // Load current value of counter
    document.querySelector('#counter3').innerHTML = 'Saved counter: ' + localStorage.getItem('counter3');

    // Count every time button for counter3 is clicked
    document.querySelector('#button3').onclick = () => {
        // Increment current counter
        let counter3 = localStorage.getItem('counter3');
        counter3++;

        // Update counter
        document.querySelector('#counter3').innerHTML = 'Saved counter: ' + counter3;
        localStorage.setItem('counter3', counter3);
    }




    // This is a comment.
});

let counter = 0;
let counter2 = 0;

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

function count2() {
    counter2++;
    document.querySelector('#counter2').innerHTML = 'Automatic counter: ' + counter2;
}

// Set starting value of counter to 0
if (!localStorage.getItem('counter3')) localStorage.setItem('counter3', 0);