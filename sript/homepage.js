import { persons, pushperson, deleteperson } from "../data/persons.js";
import { createid } from "./utils/createid.js";

renderadded();
document.querySelector('.add-button').addEventListener("click",()=>{
    addperson();
    renderadded();
})
function addperson(){
    let name=document.querySelector('.input-name').value;
    let weight=document.querySelector('.input-weight').value;
    let id=createid();
    pushperson(id,name,weight);
}


function renderadded(){
    let htmladded='';
    persons.forEach((person)=>{
        htmladded+=`<div class="added-person">
                    <div class="added-person-data">
                        <p class="added-name">${person.name}</p>
                        <input type="text" placeholder="Enter Name" name="name" class="input input-name">
                        <p class="added-weight">${person.weight}</p>
                        <input type="number" placeholder="Enter weight" name="weight" class="input input-weight">
                    </div>
                    <div class="added-person-button">
                        <button class="person-delete" data-id="${person.id}">Delete</button>
                        <button class="person-update" data-id="${person.id}">Update</button>
                    </div>    
                </div>`
    })
    document.querySelector('.added').innerHTML=htmladded;
    document.querySelectorAll('.person-delete').forEach((delbutt)=>{

        delbutt.addEventListener("click",()=>{
            let id=delbutt.dataset.id;
            console.log(id);
            deleteperson(id);
            renderadded();
        })
    });
    document.querySelectorAll('.person-update').forEach((upbutt)=>{

        upbutt.addEventListener("click",()=>{
            let id=upbutt.dataset.id;
            console.log(id);
        })
    });
}

