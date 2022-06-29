let count = 0

function increment() {
    count = count + 1
    count = document.getElementById("count-el").innerHTML=count
}

function save() {
    console.log(count)
}

let message = "You have three new notifications"
console.log(message)