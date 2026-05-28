let display = document.getElementById("display")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")

let m = 0
let s = 0
let ms = 0
let timer
is_running = false

display.textContent = "00:00:00"
function displaytimer() {
    let milli = ms < 10 ? "0" + ms : ms
    let min = m < 10 ? "0" + m : m
    let sec = s < 10 ? "0" + s : s
    display.textContent = `${min}:${sec}:${milli}`
}

start.addEventListener("click", () => {
    if (is_running) {
        return
    }
    is_running = true
    timer = setInterval(() => {
        ms++
        if (ms == 100) {
            s++
            ms = 0
        }
        if (s == 60) {
            m++
            s = 0
        }
        displaytimer()
    }, 10);
})

stop.addEventListener("click", () => {
    is_running = false
    clearInterval(timer)
})

reset.addEventListener("click", () => {
    is_running = false
    clearInterval(timer)
    ms=0
    m=0
    s=0
    display.innerHTML = "00:00:00"
})