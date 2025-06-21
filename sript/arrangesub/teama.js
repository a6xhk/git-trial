import { pushtoteam1, team1list } from "../../data/team.js";

export function renderteama() {
    let teamahtml = '';
    team1list.forEach((item) => {
        teamahtml += `<div class="person">
                        <div class="data">
                            <p>${item.name}</p>
                            <p>${item.weight}</p>
                        </div>
                        <div class="delete css-none">
                            <button>Delete</button>
                        </div>
                    </div>`
    })

    document.querySelector('.person-lista').innerHTML=teamahtml;







    document.querySelectorAll(`.teamA`).forEach((button) => {
        button.addEventListener('click', () => {
            pushtoteam1(Number(button.dataset.index));
            renderteama();
        })
    })
}

