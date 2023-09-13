//const numberArray = [1, 2, 3, 4, 5]


//const newArray = numberArray.map((element, index, array) => {
//    console.log({
//        element: element,
//        newElement: element + 5,
//        index: index,
//        array: array
//    });
//});

//console.log({ newArray })






const names = ['Juku', 'Mari', 'Jaan', 'Anni']

const data = names.map(name => {
    return {
        name: name,
        email: name.toLowerCase() + '@company.com',
        age: name.length + 20,
        adress: name + 'LongStreet 33',
        username: name.split("").reverse().join(""),

    }
})

// ... <-- spread syntax

const newJuku = {
    ...data[0],
    height: 185
}

const olderJuku = {
    ...newJuku,
    age: 45
}

console.log({ olderJuku })