export let persons = JSON.parse(localStorage.getItem("persons")) || [];

export function pushperson(id, name, weight) {
    persons.push({ id, name, weight });
    savetostorage();
}

function savetostorage() {
    localStorage.setItem("persons", JSON.stringify(persons));
}
export function deleteperson(index) {
    persons.splice(index, 1);
    savetostorage();
}
export function updatedata(index, name, weight) {
    persons[index].name = name;
    persons[index].weight = weight;
    savetostorage();
}
export function availableremove(index) {
    persons.splice(index, 1);
}
export function availableadd(person) {
    persons.push(person);
}