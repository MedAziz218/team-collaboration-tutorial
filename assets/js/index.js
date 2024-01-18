

const handleOnMove = e => {
    const left = document.getElementById("left-side")
    const right = document.getElementById("right-side")
    const hero = document.getElementById("hero-side")
    const p = e.clientX / window.innerWidth * 100;
    const rightElementRect = right.getBoundingClientRect();
    if (
        e.clientX >= rightElementRect.left &&
        e.clientX <= rightElementRect.right &&
        e.clientY >= rightElementRect.top &&
        e.clientY <= rightElementRect.bottom
    ){
        if (p>80){
            left.classList.add("hero")
        }
        else{
            left.classList.remove("hero")
        }
        left.animate([{ width: `${p}%` }], {
            duration: 1200, fill: "forwards",
            easing: "ease-out"
        })
        
    }


}

window.onload = function () {
    // Your code to run after the page has finished loading
    console.log("Page has finished loading!");
    const left = document.getElementById("left-side")
    const initial_left_side_width = "50%"


    const anim = left.animate([{ width: "100%" }, { width: initial_left_side_width }], {
        duration: 700, fill: "forwards",
        easing: "ease-out"
    })
    anim.onfinish = () => {
        document.onmousemove = e => handleOnMove(e)
        document.ontouchmove = e => handleOnMove(e.touches[0])
    }
};