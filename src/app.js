const nevlista = document.querySelector("#nevlista")
var nevTomb= [
    "Pista"
    ,"Janos"
    ,"Jeno"
    ,"Adrian",
    "Pali",
    "Endre",
    "Antal",

]

nevTomb.forEach((nev) => {
    var li = document.createElement('li')
    li.textContent=(nev)
    li.className = 'list-group-item'
    nevlista.appendChild(li)
});

