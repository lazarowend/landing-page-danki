var b = false
var ul = document.querySelector("nav.mobile-menu ul");
function Mobile() {
    if (b) {
        ul.style.opacity = 0
        ul.style.display = 'none'
        b = false
    }
    else {
        ul.style.opacity = 1
        ul.style.display = 'block'
        b = true
    };
    console.log(b)
}