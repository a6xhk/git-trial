import { persons, pushperson, deleteperson, updatedata} from "../data/persons.js";
import { selected } from "../data/selected.js";
import { tounselect, updateselected } from "./homeselectpeople.js";
import { showmsg } from "./utils/calculatetotal.js";
import { createid } from "./utils/createid.js";
renderadded();
document.querySelector(".Submittoarrange").addEventListener("click",()=>{
    console.log("fulldata")
    localStorage.setItem("fulldata",JSON.stringify(persons))
    localStorage.setItem("persons",JSON.stringify(selected))
})
document.querySelector('.add-button').addEventListener("click", () => {
    addperson();
    renderadded();
})
document.querySelector('.input-weight').addEventListener("keydown",(event)=>{
  if (event.key=='Enter'){
    addperson();
    renderadded();
  }  
})
function addperson() {
    showmsg();

    let name = document.querySelector('.input-name').value;
    document.querySelector('.input-name').value="";
    let weight = document.querySelector('.input-weight').value;
    document.querySelector('.input-weight').value=""
    let id = createid();
    pushperson(id, name, weight);
}


export function renderadded() {
    console.log(selected)
    let htmladded = '';
    persons.forEach((person, index) => {
        htmladded += `<div class="added-person added${index} added${person.id}">
                    <div class="added-person-data" data-index="${index}">
                        <div class="data-disply data-disply${index}">
                            <p class="added-name">${person.name}</p>
                            <p class="added-weight">${person.weight}</p>
                            
                        </div>
                        <div class="data-edit data-edit${index} css-none">
                            <input type="text" name="name" class="edit edit-name${index}">
                            
                            <input type="number" name="weight" class="edit edit-weight${index}">
                            
                        </div>
                    </div>
                    <div class="added-person-button">
                        <button class="person-delete" data-id="${person.id}" data-index="${index}">Delete</button>
                        <button class="person-update update${index}" data-id="${person.id}" data-index="${index}">Update</button>
                        <button class="confirm con${index} css-none" data-id="${person.id}" data-index="${index}">Update</button>
                        
                    </div>    
                </div>`
    })
    document.querySelector('.added').innerHTML = htmladded;
    document.querySelectorAll('.person-delete').forEach((delbutt) => {

        delbutt.addEventListener("click", () => {
            let index = delbutt.dataset.index;
            deleteperson(Number(index));
            renderadded();
        })
    });
    document.querySelectorAll('.person-update').forEach((upbutt) => {
        upbutt.addEventListener("click", () => {
            toupdate(upbutt);

        })
    });
    
    updateselected();
    tounselect();
}
function toupdate(upbutt) {
    let index = upbutt.dataset.index;
    index = Number(index);
    document.querySelector(`.data-edit${index}`).classList.remove("css-none");
    document.querySelector(`.data-disply${index}`).classList.add("css-none");
    upbutt.classList.add("css-none");
    document.querySelector(`.con${index}`).classList.remove("css-none")
    document.querySelector(`.edit-name${index}`).value = (persons[index].name);
    document.querySelector(`.edit-weight${index}`).value = (persons[index].weight);
    document.querySelector(`.con${index}`).addEventListener("click",()=>{
        confirm(index)
    })
}
function confirm(index){
    let name=document.querySelector(`.edit-name${index}`).value
    let weight=document.querySelector(`.edit-weight${index}`).value;
    updatedata(index,name,weight);
    document.querySelector(`.data-edit${index}`).classList.add("css-none");
    document.querySelector(`.data-disply${index}`).classList.remove("css-none");
    document.querySelector(`.con${index}`).classList.add("css-none")
    document.querySelector(`.update${index}`).classList.remove("css-none")

    renderadded();
}

