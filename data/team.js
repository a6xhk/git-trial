import { renderavailable } from "../sript/arrangesub/available.js";
import { availableremove, persons } from "./persons.js";
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