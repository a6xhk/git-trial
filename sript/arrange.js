import { balanceit } from '../data/team.js';
import { renderavailable } from './arrangesub/available.js';

renderavailable();
document.querySelector(".edit-submit-full").addEventListener("click",()=>{
    console.log("submitfull")
    localStorage.setItem("persons",localStorage.getItem("fulldata"))
})
document.querySelector(".sortrest").addEventListener("click",()=>{
    balanceit()
})
