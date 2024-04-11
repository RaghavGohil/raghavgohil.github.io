const cursor = document.getElementById("cursor");

function moveRandom()
{
    cursor.style.left =  Math.floor(Math.random() * document.body.clientWidth) + "px";
    cursor.style.top = Math.floor(Math.random() * document.body.clientHeight)+ "px";
}

window.setInterval(moveRandom,2000)