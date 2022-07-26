/* 
    Debugging the lab!

    We will build on top of our tasks example. 
    We will be saving/fetching data from a mock server
    We will also work on setTimeout, SetInterval

    Intro to context
*/

const serverUrl = 'http://localhost:3000/items'

const items = []

fetch(serverUrl)
    .then(response => response.json())
    .then(json => {
        for (const task of json) {
            addItem(task)
        }
    });

function addItem(task) {

    if (items.some((item) => task.name === item.name)) {
        throw new Error('Duplicate entry, get creative!')
    }

    const listNode = document.getElementsByTagName('ul')[0];

    const node = document.createElement('li'); // === <li></li>

    node.innerText = task.name;

    node.id = (task.id || Date.now());

    node.addEventListener('click', markAsCompleted);

    listNode.appendChild(node);

    const createdItem = { id: node.id, name: task.name, completed: task.completed || false };
    
    items.push(createdItem);

    return createdItem;
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

    const createdItem = addItem({ name: trimmed });

    saveTask(createdItem);

    input.value = '';
}

function markAsCompleted(event) {
    const itemIndex = items.findIndex(item => item.name === event.target.innerText);
    items[itemIndex].completed = true;

    event.target.style['text-decoration'] = 'line-through'
}


function saveTask(task) {
    return fetch(serverUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(task)
    }).then(res => res.json)
    .then(json => {
        console.log('Saved task', task)
        console.log(json);
    })
}