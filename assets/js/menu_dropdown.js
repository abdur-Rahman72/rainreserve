let menu = document.getElementById('menu');

let menu_btn = document.getElementById('menu_btn');
menu_btn.addEventListener('click', ()=>{
    menu.classList.remove('none');
})

let close_btn = document.getElementById('close_menu_btn');
close_btn.addEventListener('click', ()=>{
    menu.classList.add('none');
})