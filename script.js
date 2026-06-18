let nameInput = document.querySelector(".name")
let image = document.querySelector(".jazzman")
let button = document.querySelector(".button1")
let manText = document.querySelector(".manSpeaking")
let yes = document.querySelector(".yes1")
let no = document.querySelector(".no1")
let step = 0
let keyboard = 0

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
//end of first

//yes and no event tracking
yes.addEventListener("click", function(){
    step++

    //yes is choice A in some cases where not yes/no
    next("A")
})
no.addEventListener("click", function(){
    step++

    //no is choice B
    next("B")
})

function next(choice){
    //deciding if you want to play in the gig or not
    if (step == 1) {
        if (choice == "A"){
            manText.innerHTML = "Perfect, go down this street, take a right, then go 2 blocks, take a left, then go 3 blocks and take a slight right. Got it?"
            yes.innerHTML = "Uhh...sure."
            no.innerHTML = "Actually, I'm alright."
        }
        if (choice == "B"){
            manText.innerHTML = "Man...alright. I guess I'll look for someone else...have a nice one bud. (Refresh to start over)"
            yes.style.display = "none"
            no.style.display = "none"
        }
    }
    //decide if wanting to go to music store or not
    if (step == 2) {
        if (choice == "A") {
            image.src = "assets/musicMan.png"
            document.body.style.backgroundImage = "url('assets/musicStore.jpg')"
            manText.innerHTML = "Hey, I'm George. What can I get for ya?"
            yes.innerHTML = "I need a Yamaha keyboard."
            no.innerHTML = "I need a Nord keyboard."
        

        }
        if (choice == "B") {
            manText.innerHTML = "Wow. Backing out now? You're gonna screw up the gig because you don't feel like it? Pathetic. (Refresh to start over)"
            yes.style.display = "none"
            no.style.display = "none"
        }
    }
    //deciding which keyboard to use
    if (step == 3) {
        if (choice == "A"){
            keyboard = 1 
            manText.innerHTML = "Yamaha...great choice. I used to play on a Yamaha back in the day...hmm...anyhow, best of luck to you!"
            no.style.display = "none"
            yes.innerHTML = "Make your way to the gig"

        }
        if (choice == "B"){
            keyboard = 2 //nord selection = 2
            manText.innerHTML = "Ooo...a Nord. A good choice indeed. A newer brand, but they have been doing well. Good luck!"
            no.style.display = "none"
            yes.innerHTML = "Go to the gig"

        }
    }
    //making way to gig
    if (step == 4) {
        if (choice == "A"){
            image.src = "assets/gigPerson.png"
            document.body.style.backgroundImage = "url('assets/jazzbarBg.gif')"
            if (keyboard == 1) {
                manText.innerHTML = "Hey! Perfect timing, we're going on stage in a minute...Hold on is that a Yamaha keyboard?? Dude, we needed a Nord or else it won't sound right...ah whatever, let's just go, we don't have time!"
                yes.innerHTML = "Go on stage"
            }
            else {
                manText.innerHTML = "Hey! Perfect timing, we're going on stage in a minute...hold up...is that a Nord keyboard!? Sweet! That is just what we needed, let's go on stage!"
                yes.innerHTML = "Go on stage"


            }

        }
    }
    if (step == 5) {
        document.body.style.backgroundImage = "url('assets/onStage.jpg')"
        image.style.display = "none"
        yes.innerHTML = "Begin the song!"
        manText.innerHTML = "Oh Geez. What have I signed up for...I better lock in..."
    }
    if (step == 6) {
        window.close('main.html');
        window.open('game.html', '_blank');
       

    }
}
