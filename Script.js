let name = prompt("What`s your name?")

if (name != null) {

    alert("Welcome " +name+" (⌐■_■)")
}
else {
    window.location.reload();

}

let age = prompt ("whats your age?")

if (age <15) {

    alert("Not allowed, you are underage (╯°□°）╯︵ ┻━┻")
    window.location.reload();
}
else{

    alert("Enjoy your stay "+ name+" ᓚᘏᗢ")
}

console.log();