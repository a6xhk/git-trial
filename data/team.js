import { renderavailable } from "../sript/arrangesub/available.js";
import { availableadd, availableremove, persons } from "./persons.js";
export let team1list =[];
export let team2list=[];

export function pushtoteam1(index){
    team1list.push(persons[index]);
    availableremove(index);
    renderavailable();
}
export function pushtoteam2(index){
    team2list.push(persons[index]);
    availableremove(index);
    renderavailable();
    


}
export function removeteam1(index){
    availableadd(team1list[index])
    team1list.splice(index,1);
}
export function removeteam2(index){
    availableadd(team2list[index])
    team2list.splice(index,1);
}
export function movetob(index){
    team2list.push(team1list[index]);
    team1list.splice(index,1)
}
export function movetoa(index){
    team1list.push(team2list[index]);
    team2list.splice(index,1)
}