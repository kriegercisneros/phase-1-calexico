// Write your code here...

// Write your code here...

    fetch('http://localhost:3000/menu')
    .then(function (response)  {
        if (response.ok) {
          return response.json()
        } else {
          throw (response.statusText)
        }
    })
    .then(function(data) {
            populateMenu(data)
            populateMenuItems(data[0])
        })

const menu = document.querySelector('#menu-items');
const image = document.querySelector('#dish-image');
const name1 = document.querySelector('#dish-name');
const description = document.querySelector('#dish-description');
const price = document.querySelector('#dish-price');

    function populateMenu(items){
        items.forEach(item => {
            const spanItem = document.createElement('span');
            spanItem.innerText = item.name
            menu.appendChild(spanItem)
            spanItem.addEventListener('click', () => {
                populateMenuItems(item)
            } )
        })
    } //console.log(menu)

    function populateMenuItems(food){
       image.src = food.image;
       name1.innerText = food.name;
       description.innerText = food.description;
       price.innerText = food.price;
    }
    
const cartForm = document.querySelector('#cart-form');
const bag = document.querySelector('#number-in-cart');
// const cart = document.querySelector('#cart-amount');

cartForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = parseInt(event.target[0].value)
    bag.innerText = input + parseInt(bag.innerText);
    console.log(event.target[0].value);
})

    

        