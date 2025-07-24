import { persons } from "../data/persons.js";
import { removefromselected, selected } from "../data/selected.js";
import { renderadded } from "./homepage.js";

export function updateselected() {
    persons.forEach((person) => {
        selected.forEach((select, index) => {
            if (person.id === select.id) {
                document.querySelector(`.added${select.id}`).classList.toggle("selected");
            }
        })
    });



}


export function tounselect() {
    document.querySelectorAll(".added-person .added-person-data").forEach((persondiv) => {
        let index = persondiv.dataset.index;
        let contariner = ''

        persondiv.addEventListener("click", () => {
            persons.forEach((Element) => {
                if (Element.id === persons[index].id)
                    contariner = Element.id
            })
            removefromselected(contariner);
            renderadded();
        })
    })
}
