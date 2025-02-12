var techniques = document.getElementsByClassName('techniques');
for (let index = 0; index < techniques.length; index++) {
    let indiv_tech = techniques[index];
    if (index != 0) {
        indiv_tech.classList.add("none");
    }
}

var current_tech = 0;
var change = 0;


function change_technique (){
    techniques[current_tech].classList.add("none");
    if (change == 1) {
        if (current_tech != 4) {
            current_tech = current_tech + change
        } else {
            current_tech = 0;
        }
    } else {
        if (current_tech != 0) {
            current_tech = current_tech + change
        } else {
            current_tech = 4;
        }
    }
    techniques[current_tech].classList.remove("none");
}

function technique_back (){
    change = -1;
    change_technique();
}

function technique_forward () {
    change = 1;
    change_technique();
}

