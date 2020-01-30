console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => { 
    console.log("connected")
    console.log()
    renderDogs()
    renderBreeds()
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

let renderBreeds = function() { 
    fetch ('https://dog.ceo/api/breeds/list/all')
    .then ( response => response.json() )
    .then ( breedArray =>{  
        
        Object.keys(breedArray.message).forEach((breed) =>{ 
            breedList(breed)
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

function breedList (breed){ 
    let list = document.getElementById("dog-breeds")
    let breedLi = document.createElement("li")
    list.appendChild(breedLi)
    breedLi.innerText = breed

}

function breedSearch () { 

}