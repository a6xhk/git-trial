import { movetob, removeteam1, team1list } from "../../data/team.js";
import { calculateteama } from "../utils/calculatetotal.js";
import { renderavailable } from "./available.js";
import { renderteamb } from "./teamb.js";

export function renderteama() {
    let teamahtml = '';
    calculateteama();
    team1list.forEach((item,index) => {
        teamahtml += `<div class="person ta${index}" data-index="${index}">
                        <div class="dataA">
                            <p>${item.name}</p>
                            <p>${item.weight}</p>
                        </div>
                        <div class="dela css-none css-button-row" data-index="${index}">
                            <button data-index="${index}" class="deletea">Delete</button>
                            <button data-index="${index}" class="deletetob">Move to B</button>
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
    document.querySelectorAll(`.deletetob`).forEach((button)=>{
        button.addEventListener("click",()=>{
            let index=button.dataset.index
            movetob(Number(index));
            renderteamb();
            renderteama();
        })
    })

    document.querySelectorAll('.person-lista .person').forEach((singleperson)=>{
        singleperson.addEventListener("mouseenter",()=>{
            setTimeout(()=>{
            let index=Number(singleperson.dataset.index);
            mouseentering(singleperson,index);    
            },200)
            
        })
    })
     document.querySelectorAll('.person-lista .person').forEach((singleperson)=>{
        singleperson.addEventListener("mouseleave",()=>{
            let index=Number(singleperson.dataset.index);
            mouseentering(singleperson,index);
        })
    })

}function mouseentering(person,index){
    
    document.querySelector(`.ta${index} .dataA`).classList.toggle("css-none");
    document.querySelector(`.ta${index} .dela`).classList.toggle("css-none");
    
}


