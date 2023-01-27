const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

function onClick (){
if (bar) {
    bar.addEventListener('click' , () => {
        nav.classList.add('active');
    })
}
}