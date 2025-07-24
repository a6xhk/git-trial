import { persons } from "../../data/persons.js";
import { team1list, team2list } from "../../data/team.js";

export function calculateavailable(){
    document.querySelector(".availabletext").innerHTML=`Available (${persons.length})-${availableweight()}`;
}
export function calculateteama(){
    document.querySelector(".teamatext").innerHTML=`Team A (${team1list.length})-${aweight()}`;
    document.querySelector(".diffrence").innerHTML=`<p>${calculatediff()}</p>Difference`;
}
export function calculateteamb(){
    document.querySelector(".teambtext").innerHTML=`Team b (${team2list.length})-${bweight()}`;
    document.querySelector(".diffrence").innerHTML=`<p>${calculatediff()}</p>Difference`;

}
export function availableweight(){
    let availablew=0;
    persons.forEach(element => {
        availablew+=Number(element.weight);
    });
    return availablew;
}
export function aweight(){
    let aw=0;
    team1list.forEach(element => {
        aw+=Number(element.weight);
    });
    return aw;
}
export function bweight(){
    let bw=0;
    team2list.forEach(element => {
        bw+=Number(element.weight);
    });
    return bw;
}
export function calculatediff(){
    let aw=aweight();
    let bw=bweight();
    return (Math.abs(aw-bw));
}
export function showmsg(){
    document.querySelector('.addmsg').classList.remove('css-none');
    setTimeout(() => {
        document.querySelector('.addmsg').classList.add('css-none');
    }, 2000);
}
