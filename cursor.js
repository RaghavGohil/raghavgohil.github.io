const cursor = document.getElementById("cursor");
document.onmousemove = (e)=>{
    cursor.style.left = (e.pageX - 250) + "px";
    cursor.style.top = (e.pageY - 250) + "px";
}