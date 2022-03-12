let app = document.querySelector('#root') 

//Add container
let container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

fetch('https://fakestoreapi.com/products') // API adress

// Obtaining data from API
.then((res)=>{
    return res.json()
}).then((data)=>{
    data.forEach(store => {
        let chip =document.createElement('div')
        chip.setAttribute('class','chip')
        container.appendChild(chip)

        // images addition
        let image = document.createElement('img')
        image.src = store.image
        chip.appendChild(image)

        // title addition
        let title= document.createElement('h2')
        title.textContent = store.title
        chip.appendChild(title)

        // category addition
        let category = document.createElement('h3')
        category.textContent=store.category
        chip.appendChild(category)

        // description addition
        let description = document.createElement('p')
        description.textContent=store.description
        chip.appendChild(description)

        // price addition
        let price = document.createElement('p')
        price.textContent=store.price
        chip.appendChild(price)
    });
}).catch(error=> console.log(error))