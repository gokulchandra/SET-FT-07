// * Prevent duplicate entries
// * Mark as complete
// * Add a button that removes all completed tasks

const items = [];

function addItem(task) {

    if (items.some((item) => task === item.name)) {
        throw new Error('Duplicate entry, get creative!')
    }

    const listNode = document.getElementsByTagName('ul')[0];

    const node = document.createElement('li'); // === <li></li>

    console.log('I Will run before the above console')

    node.innerText = task;

    node.id = Date.now() + task;

    node.addEventListener('click', markAsCompleted);

    listNode.appendChild(node);

    items.push({ name: task, completed: false });
}

function onEnter(event) {
    if (event.keyCode === 13) {
        getItem();
    }
}

function getItem() {
    const input = document.getElementById('task-name');
    const trimmed = input.value.trim();
    if (trimmed === '') {
        throw new Error('Write something')
    }

    addItem(trimmed);

    input.value = '';
}

function markAsCompleted(event) {
    const itemIndex = items.findIndex(item => item.name === event.target.innerText);
    items[itemIndex].completed = true;

    event.target.style['text-decoration'] = 'line-through'

}

/*
    Async programming.
    Getting data from the server using `fetch`
*/

/* 
    Promise - allows async programming
    Promise can be in two states: 
        - Pending 
        - Fulfilled
        - Rejected

        When promise changes from Pending -> resolved
        When promise changes from Pending -> rejected
*/


fetch('https://run.mocky.io/v3/fa1510e4-9ea0-4f4e-a82b-729937f3334e', {
    mode: 'cors'
})
    .then((res) => res.json())
    .then((items) => items.forEach(item => addItem(item.name)))
    .catch(err => {
        console.log(err)
    })