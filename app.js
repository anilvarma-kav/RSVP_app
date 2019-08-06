const form = document.getElementById('registrar');
const input = document.querySelector('input');
const ul = document.getElementById('invitedList');
//event listener if user clicks submit button or Enter key from keyboard
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let text = input.value;
    input.value = '';
    const li = document.createElement("li");
    li.textContent = text;
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkBox = document.createElement('input');
    checkBox.type = 'checkBox';
    label.appendChild(checkBox)
    li.appendChild(label);
    ul.appendChild(li);
} );

ul.addEventListener('change', (e) => {
    const checkbox = e.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;

    if(checked) {
        listItem.className = 'responded';
    }
    else{
        listItem.className = '';
    }
});