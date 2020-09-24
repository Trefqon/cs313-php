function handleClick() {
    alert("Clicked!");
}

function changeColor() {
    var color = document.getElementById("text1").innerHTML;
    document.getElementById("div1").style.backgroundColor = color;
}