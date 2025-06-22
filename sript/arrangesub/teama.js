import { removeteam1, team1list } from "../../data/team.js";
import { renderavailable } from "./available.js";

export function renderteama() {
    let teamahtml = '';
    
    team1list.forEach((item,index) => {
        teamahtml += `<div class="person ta${index}" data-index="${index}">
                        <div class="dataA">
                            <p>${item.name}</p>
                            <p>${item.weight}</p>
                        </div>
                        <div class="dela css-none" data-index="${index}">
                            <button data-index="${index}" class="deletea">Delete</button>
                        </div>
                    </div>`
    })

    document.querySelector('.person-lista').innerHTML = teamahtml;

    document.querySelectorAll(`.deletea`).forEach((button) => {
        button.addEventListener('click', () => {
            let index = button.dataset.index;
            removeteam1(Number(index));
            renderteama();
            renderavailable();
        })
    })

    document.querySelectorAll('.person-lista .person').forEach((singleperson)=>{
        singleperson.addEventListener("mouseenter",()=>{
            let index=Number(singleperson.dataset.index);
            mouseentering(singleperson,index);
        })
    })
     document.querySelectorAll('.person-lista .person').forEach((singleperson)=>{
        singleperson.addEventListener("mouseleave",()=>{
            let index=Number(singleperson.dataset.index);
            mouseleaving(singleperson,index);
        })
    })

}function mouseentering(person,index){
    
    document.querySelector(`.ta${index} .dataA`).classList.add("css-none");
    document.querySelector(`.ta${index} .dela`).classList.remove("css-none");
    
}
function mouseleaving(person,index){
    document.querySelector(`.ta${index} .dataA`).classList.remove("css-none");
    document.querySelector(`.ta${index} .dela`).classList.add("css-none");
}


