let app = document.querySelector('#root')


let container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)


fetch('https://fakestoreapi.com/products')
.then((res)=>{
    return res.json()
}).then((data)=>{
    data.forEach(clothes => {
        let chip =document.createElement('div')
        chip.setAttribute('class','chip')
        container.appendChild(chip)

        let title= document.createElement('h1')
        title.textContent = clothes.title
        chip.appendChild(title)

        let category = document.createElement('h2')
        category.textContent=clothes.category
        chip.appendChild(category)


        let description = document.createElement('p')
        description.textContent=clothes.description
        chip.appendChild(description)

        
        let price = document.createElement('p')
        price.textContent=clothes.price
        chip.appendChild(price)

    

        let image = document.createElement('img')
        image.src = clothes.image
        chip.appendChild(image)
 
 
    });
}).catch(error=> console.log(error))