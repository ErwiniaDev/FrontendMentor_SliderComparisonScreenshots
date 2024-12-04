function verticalSlide() {
    let slideValue = 100 - document.getElementById("vertical-slider").value;

    document.getElementById("my-vertical-img").style.clipPath="inset(0 " + slideValue + "% 0 0)"
}

function horizontalSlide() {
    let slideValue = 100 - document.getElementById("horizontal-slider").value;

    document.getElementById("my-horizontal-img").style.clipPath="inset(" + slideValue + "% 0 0 0)"
}

function redirect(url) {
    window.location = url;
}
