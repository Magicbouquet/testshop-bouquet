const OpenPopup = document.getElementById('open_pop_up');
const ClosePopup = document.getElementById('open_pop_close');
const popUp = document.getElementById('pop_up');

OpenPopup.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active'); 
})

ClosePopup.addEventListener('click', () => {
    popUp.classList.remove('active'); 
})

const goTopBtn = document.querySelector(".go-top");
goTopBtn.addEventListener("click", goTop);
window.addEventListener("scroll",tractScroll)
function tractScroll() {
const offset = window.pageYOffset;
const coords = document.documentElement.clientHeight;
if(offset>coords) {
    goTopBtn.classList.add("go-top--show");
}
else {
    goTopBtn.classList.remove("go-top--show");
}
}

function goTop () {
    if (window.pageYOffset > 0 ){
        window.scrollBy(0, -25000);
        setTimeout(goTop, 0);
    }
}


