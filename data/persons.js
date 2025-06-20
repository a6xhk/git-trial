export let persons=JSON.parse(localStorage.getItem("persons"))||[];

export function pushperson(id,name,weight){
    persons.push({id,name,weight});
    savetostorage();
}

function savetostorage(){
    localStorage.setItem("persons",JSON.stringify(persons));
}
export function deleteperson(id){
    let newlist=[];
    persons.forEach(element => {
        if(element.id!=id){
            newlist.push(element);
        }
    });
    persons=newlist;
    savetostorage();
}