/*
    3 ways of doing async programming?
    1. using callbacks
    2. using promises
    3. async/await
    
 */

const list = [1, 2, 3, 4, 5];

list.map((i) => console.log(i));

setTimeout(() => {
    console.log('I am now done')
}, 2000)

fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(json => {
        for (const item of json) {
            fetch('http://localhost:3000/items/' + item.id)
                .then(res => res.json())
                .then(json => console.log(json))
        }
    })




async function doAsyncMagic() {
    const response =  await fetch('http://localhost:3000/items')
    const json =  await response.json()
    handleItems(json);
}


async function handleItems(items) {
    for (const item of items) {
        const itemResponse = await fetch('http://localhost:3000/items/'+item.id)
        const itemDetails = await itemResponse.json();
        console.log(itemDetails)
    }
}