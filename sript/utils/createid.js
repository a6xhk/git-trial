import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs@2.0.0-alpha.2/dist/index.mjs';

export function createid() {
    let time = dayjs();
    time = time.format('SSSYYYYssmmhhDDMM');
    let rand = Math.random();
    rand = Math.round(rand * 1000000);
    return rand + time;
}