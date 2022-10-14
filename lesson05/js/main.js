const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', function () {
    if (input.value != null && input.value != "") {
        const li = document.createElement('li');
        const delate = document.createElement('button');
        li.appendChild(document.createTextNode(input.value));
        delate.textContent = "❌";

        li.appendChild(delate);
        ul.append(li);

        delate.addEventListener('click', function () {
            li.remove();
        });
        input.focus();
        input.value = "";
        input.focus();
    }
});