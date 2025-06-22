import { persons } from "../../data/persons.js";
import { pushtoteam1, pushtoteam2 } from "../../data/team.js";
import { renderteama } from '.././arrangesub/teama.js';
import { renderteamb } from '.././arrangesub/teamb.js';
export function renderavailable(){
    let htmlavailable='';
    persons.forEach((person,index)=> {
        htmlavailable+=`<div class="person a${index}" data-index="${index}">
                <div class="data-value">
                    <p>${person.name}</p>
                    <p>${person.weight}</p>
                </div>
                <div class="person-team-buttons css-none">
                    <button class="teamA" data-index="${index}">A</button>
                    <button class="teamB" data-index="${index}">B</button>
                </div>
            </div>`
    });
    document.querySelector('.available').innerHTML=htmlavailable;
    document.querySelectorAll('.available .person').forEach((singleperson)=>{
        singleperson.addEventListener("mouseenter",()=>{
            let index=Number(singleperson.dataset.index);
            mouseentering(singleperson,index);
        })
    })
     document.querySelectorAll('.available .person').forEach((singleperson)=>{
        singleperson.addEventListener("mouseleave",()=>{
            let index=Number(singleperson.dataset.index);
            mouseleaving(singleperson,index);
        })
    })
    document.querySelectorAll(`.teamA`).forEach((button) => {
        button.addEventListener('click', () => {
            pushtoteam1(Number(button.dataset.index));
            renderteama();
        })
    })
    document.querySelectorAll(`.teamB`).forEach((button) => {
        button.addEventListener('click', () => {
            pushtoteam2(Number(button.dataset.index));
            renderteamb();
        })
    })
}

function mouseentering(person,index){
    document.querySelector(`.a${index} .data-value`).classList.add("css-none");
    document.querySelector(`.a${index} .person-team-buttons`).classList.remove("css-none");
    
}
function mouseleaving(person,index){
    document.querySelector(`.a${index} .data-value`).classList.remove("css-none");
    document.querySelector(`.a${index} .person-team-buttons`).classList.add("css-none");
}
