var more = document.getElementsByClassName("more_btn");
var myth_facts = document.getElementsByClassName("fact");
var less = document.getElementsByClassName("less_btn");

for (let index = 0; index < more.length; index++) {
    let indiv_more = more[index];
    let indiv_fact = myth_facts[index];
    let indiv_less = less[index];
    indiv_more.addEventListener('click', ()=>{
        indiv_fact.classList.remove('none');
        indiv_less.classList.remove('none');
        indiv_more.classList.add('none');
    })
    indiv_less.addEventListener('click', ()=>{
        indiv_fact.classList.add('none');
        indiv_less.classList.add('none');
        indiv_more.classList.remove('none');
    })
}