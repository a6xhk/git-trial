import { deleteperson_inperson, persons } from "./persons.js";
export let selected = JSON.parse(localStorage.getItem("selected")) || [...persons];
export function delselected(ind){
    selected.forEach((Element, index) => {
        if (Element.id === persons[ind].id) {
            selected.splice(index, 1)
            saveselection();
        }
    })
    deleteperson_inperson(ind)

}
export function deleteperson(id){
    delselected(id)
}
export function removefromselected(id) {
    let win = Boolean()
    selected.forEach((Element, index) => {

        if (Element.id === id) {
            win = true
            selected.splice(index, 1)
            saveselection();

        }

    })
    if (!win) {
        persons.forEach((Element, index) => {
            if (Element.id === id) {
                selected.push(persons[index])
                saveselection();
            }
        })
    }
}

function saveselection() {
    localStorage.setItem("selected", JSON.stringify(selected))
}