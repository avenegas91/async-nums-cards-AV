let favNumber = 10;
let baseURL = "http://numbersapi.com";

// Part 1

async function part1() {
    let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data);
}
part1();

// Part 2

const favNumbers = [1, 10, 55];
async function part2() {
    let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
    console.log(data);
}
part2();

// Part 3

async function part3() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
part3();