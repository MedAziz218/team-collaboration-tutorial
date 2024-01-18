const left = document.getElementById("left-side")

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;

    left.animate([{ width: `${p}%` }], {
        duration: 1200, fill: "forwards",
        easing: "ease-out"
    })



}

window.onload = function () {
    // Your code to run after the page has finished loading
    console.log("Page has finished loading!");

    const initial_left_side_width = "50%"


    const anim = left.animate([{ width: "100%" }, { width: initial_left_side_width }], {
        duration: 500, fill: "forwards",
        easing: "ease-out"
    })
    anim.onfinish = () => {
        document.onmousemove = e => handleOnMove(e)
        document.ontouchmove = e => handleOnMove(e.touches[0])
    }
};