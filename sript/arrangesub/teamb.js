import { pushtoteam2, team2list } from "../../data/team.js";

export function renderteamb() {
    let teambhtml = '';
    team2list.forEach((item) => {
        console.log(item)
        teambhtml += `<div class="person">
                        <div class="data">
                            <p>${item.name}</p>
                            <p>${item.weight}</p>
                        </div>
                        <div class="delete css-none">
                            <button>Delete</button>
                        </div>
                    </div>`
    })

    document.querySelector('.person-listb').innerHTML=teambhtml;
}



