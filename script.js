let nameInput = document.querySelector(".name")
let image = document.querySelector(".jazzman")
let button = document.querySelector(".button1")
let manText = document.querySelector(".manSpeaking")
let yes = document.querySelector(".yes1")
let no = document.querySelector(".no1")

yes.style.display = "none"
no.style.display = "none"


//first event name enter 
button.addEventListener("click", function(){
    
    manText.innerHTML = "Nice to meet you " + nameInput.value + ". Alright kid, here's the deal: you need to go visit George's Music Store and buy a keyboard, okay? Remember, you don't got a lotta time so you better hurry up son.";
    button.style.display = "none";
    nameInput.style.display = "none";
    yes.style.display = ""
    no.style.display = ""
})
yes.addEventListener("click", function(){
    manText.innerHTML = "Perfect, go down this street, take a right, then go 2 blocks, take a left, then go 3 blocks and take a slight right. Got it?"
    yes.innerHTML = "Uhh..I guess..."
    let iGuess = yes
    no.style.display = "none"

})
no.addEventListener("click", function(){
    manText.innerHTML = "Man...alright. I guess I'll look for someone else...have a nice one bud. (Refresh to start over)"
    yes.style.display = "none"
    no.style.display = "none"
})

iGuess.addEventListener("click", function(){
    image.style.display = "none";
})