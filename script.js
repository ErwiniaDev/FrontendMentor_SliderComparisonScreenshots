function verticalSlide() {
    let slideValue = document.getElementById("vertical-slider").value;

    document.getElementById("my-vertical-img").style.clipPath="polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)"
}

function horizontalSlide() {
    let slideValue = 100 - (document.getElementById("horizontal-slider").value);

    document.getElementById("my-horizontal-img").style.clipPath="polygon(0 " + slideValue + "%, 100% " + slideValue + "%, 100% 100%, 0 100%)"
}

function redirect(url) {
    window.location = url;
}
