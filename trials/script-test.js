function verticalSlideTest1() {
    let slideValue = 100 - document.getElementById("vertical-slider-test1").value;

    document.getElementById("my-vertical-img-test1").style.clipPath="inset(0 " + slideValue + "% 0 0)"
}

function horizontalSlideTest1() {
    let slideValue = 100 - document.getElementById("horizontal-slider-test1").value;

    document.getElementById("my-horizontal-img-test1").style.clipPath="inset(" + slideValue + "% 0 0 0)"
}