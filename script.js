function verticalSlide() {
    let slideValue = document.getElementById("vertical-slider").value;

    document.getElementById("my-vertical-img").style.clipPath="polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)"
}

function horizontalSlide() {
    let slideValue = document.getElementById("horizontal-slider").value;

    document.getElementById("my-horizontal-img").style.clipPath="polygon(0 0, 100% 0, 100% " + slideValue + "%, 0 " + slideValue + "%)"
}