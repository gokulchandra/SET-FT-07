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

    node.innerText = task;

    node.id = items.length;

    node.addEventListener('click', markAsCompleted);

    listNode.appendChild(node);
    
    items.push({ name: task, completed: false });
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