import { removeteam2, team2list } from "../../data/team.js";
import { calculateteamb } from "../utils/calculatetotal.js";
import { renderavailable } from "./available.js";

export function renderteamb() {
    let teambhtml = '';
    calculateteamb();
    team2list.forEach((item,index) => {
        teambhtml += `<div class="person tb${index}" data-index="${index}">
                        <div class="dataB">
                            <p>${item.name}</p>
                            <p>${item.weight}</p>
                        </div>
                        <div class="delb css-none" data-index="${index}">
                            <button data-index="${index}" class="deleteb">Delete</button>
                        </div>
                    </div>`
    })

    document.querySelector('.person-listb').innerHTML = teambhtml;

    document.querySelectorAll(`.deleteb`).forEach((button) => {
        button.addEventListener('click', () => {
            let index = button.dataset.index;
            removeteam2(Number(index));
            renderteamb();
            renderavailable();
        })
    })

    document.querySelectorAll('.person-listb .person').forEach((singleperson)=>{
        singleperson.addEventListener("mouseenter",()=>{
            let index=Number(singleperson.dataset.index);
            mouseentering(singleperson,index);
        })
    })
     document.querySelectorAll('.person-listb .person').forEach((singleperson)=>{
        singleperson.addEventListener("mouseleave",()=>{
            let index=Number(singleperson.dataset.index);
            mouseleaving(singleperson,index);
        })
    })

}function mouseentering(person,index){
    
    document.querySelector(`.tb${index} .dataB`).classList.add("css-none");
    document.querySelector(`.tb${index} .delb`).classList.remove("css-none");
    
}
function mouseleaving(person,index){
    document.querySelector(`.tb${index} .dataB`).classList.remove("css-none");
    document.querySelector(`.tb${index} .delb`).classList.add("css-none");
}


