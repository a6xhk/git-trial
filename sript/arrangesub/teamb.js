import { movetoa, removeteam2, team2list } from "../../data/team.js";
import { calculateteamb } from "../utils/calculatetotal.js";
import { renderavailable } from "./available.js";
import { renderteama } from "./teama.js";

export function renderteamb() {
    let teambhtml = '';
    calculateteamb();
    team2list.forEach((item, index) => {
        teambhtml += `<div class="person tb${index}" data-index="${index}">
                        <div class="dataB">
                            <p>${item.name}</p>
                            <p>${item.weight}</p>
                        </div>
                        <div class="delb css-none css-button-row" data-index="${index}">
                            <button data-index="${index}" class="deleteb">Delete</button>
                            <button data-index="${index}" class="deletetoA">Move to A</button>
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
    document.querySelectorAll(`.deletetoA`).forEach((button) => {
        button.addEventListener("click", () => {
            let index = button.dataset.index
            movetoa(Number(index));
            renderteama();
            renderteamb();
        })
    })

    document.querySelectorAll('.person-listb .person').forEach((singleperson) => {
        singleperson.addEventListener("mouseenter", () => {
            setTimeout(() => {

                let index = Number(singleperson.dataset.index);
                mouseentering(singleperson, index);
            }, 200)

        })
    })
    document.querySelectorAll('.person-listb .person').forEach((singleperson) => {
        singleperson.addEventListener("mouseleave", () => {
            let index = Number(singleperson.dataset.index);
            mouseentering(singleperson, index);
        })
    })
} function mouseentering(person, index) {

    document.querySelector(`.tb${index} .dataB`).classList.toggle("css-none");
    document.querySelector(`.tb${index} .delb`).classList.toggle("css-none");

}


