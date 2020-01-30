console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => { 
    console.log("connected")
    console.log()
    renderDogs()
})


let renderDogs = function() { 
    fetch ('https://dog.ceo/api/breeds/image/random/4')
    .then( response => response.json() )
    .then ( dogArray => { 
        
        dogArray.message.forEach((dog) =>  { 
        renderDogImage(dog)
    })
 })
}

function renderDogImage(dog) { 
    let container = document.getElementById("dog-image-container")
    let dogDiv = document.createElement("div")
    container.appendChild(dogDiv)
    let dogImage = document.createElement("img")
    dogImage.src = dog
    dogDiv.appendChild(dogImage)
}


