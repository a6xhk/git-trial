import { renderavailable } from "../sript/arrangesub/available.js";
import { sortbal } from "../sript/arrangesub/sortrest.js";
import { renderteama } from "../sript/arrangesub/teama.js";
import { renderteamb } from "../sript/arrangesub/teamb.js";
import { aweight, bweight, calculatediff } from "../sript/utils/calculatetotal.js";
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

export function balanceit(){
    let exista=aweight()
    let existb=bweight()
    let weights=sortbal(exista,existb)
    let excludedp=null
    weights[0].forEach(element => {
        for (let i=0;i<persons.length;i++){
            if(persons[i].weight==element){
                pushtoteam1(i)
                break
            }
        }
    });
    if(weights[1]!==null){
        persons.forEach((element,index)=>{
            if(element.weight==weights[1]){
                excludedp=element
                persons.splice(index,1)
            }
        }
        )
        team2list=[...team2list,...persons]
        persons.splice(0,persons.length);
        persons.push(excludedp);
    }
    else{
        team2list=[...team2list,...persons]
        persons.splice(0,persons.length);
    }
    renderteama()
    renderteamb()
    renderavailable()
}