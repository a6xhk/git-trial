import { persons } from "../data/persons.js";
import { removefromselected, selected } from "../data/selected.js";
import { renderadded } from "./homepage.js";

export function updateselected() {
    persons.forEach((person) => {
        selected.forEach((select, index) => {
            if (person.id === select.id) {
                document.querySelector(`.sqr${select.id}`).classList.toggle("selected");
            }
        })
    });



}


export function tounselect(index) {
        console.log('clicked sqr')
        let temp
        persons.forEach((Element) => {
            if (Element.id === persons[index].id)
                temp = Element.id
        })
        removefromselected(temp);
        renderadded();
}
