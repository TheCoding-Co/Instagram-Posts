const switchTheme = () => {
    var checkbox = document.getElementById("optTheme");
    if (checkbox.checked == true) {
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
    }
    else {
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
    }
}