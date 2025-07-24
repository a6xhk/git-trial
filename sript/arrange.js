import { balanceit } from '../data/team.js';
import { renderavailable } from './arrangesub/available.js';

renderavailable();
document.querySelector(".sortrest").addEventListener("click",()=>{
    balanceit()
})
