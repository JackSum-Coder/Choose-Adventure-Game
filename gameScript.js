let submit = document.querySelector(".button5")
let instructions = document.querySelector(".manSpeaking")
let level = 0
let gigGuy = document.querySelector(".gigGuy")
gigGuy.style.display = "none"


submit.addEventListener("click", function(){
    let chord = document.querySelector(".chords").value.trim().toLowerCase()
    level++
    levelCheck(chord)
})

function levelCheck(chord){
    if (level === 1) {
        if (chord === "dminor") {
            instructions.innerHTML = "Good job! Now do: 'G, B, D'"
        } else {
            instructions.innerHTML = "You failed! Try again! (Refresh)"
        }
    }
    if (level === 2) {
        if (chord === "gmajor") {
            instructions.innerHTML = "Great! Now do: 'C, E, G'"
        } else {
            instructions.innerHTML = "You failed! Try again! (Refresh)"
        }
    }
    if (level === 3) {
        if (chord === "cmajor") {
            instructions.innerHTML = "Awesome job! Now do: 'F, Ab, C'"
        } else {
            instructions.innerHTML = "You failed! Try again! (Refresh)"
        }
    }
    if (level === 4) {
        if (chord === "fminor") {
            instructions.innerHTML = "Awesome job! Now do: 'A, C, E'"
        } else {
            instructions.innerHTML = "You failed! Try again! (Refresh)"
        }
    }
    if (level === 5) {
        if (chord === "aminor") {
            gigGuy.style.display = ""
            instructions.innerHTML = "Dude, awesome job! You saved the gig! Thanks to you we're going on tour, and I think you should join us. What do you say?"
        } else {
            instructions.innerHTML = "You failed! Try again! (Refresh)"
        }
    }
}
