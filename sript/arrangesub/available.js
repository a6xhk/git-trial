import { persons } from "../../data/persons.js";
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
            let index=singleperson.dataset.index;
            mouseentering(singleperson,index);
        })
    })
     document.querySelectorAll('.available .person').forEach((singleperson)=>{
        singleperson.addEventListener("mouseleave",()=>{
            let index=singleperson.dataset.index;
            mouseleaving(singleperson,index);
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