//2 numbrit kokku liita 


function tehe (nrs, nrs1){
    return nrs + nrs1
}

console.log(tehe(5, 9))


const arrowFunction2 = (n1, n2) => n1 + n2

console.log(arrowFunction2(10, 13))  //wow :o




const addNumbers2 = (num1) => (num2) => num1 + num2;

console.log(addNumbers2(10)(16))


// AF printida "Hello (nimi)" ja kasutada string literals


const NoName1 = (name1) => (name2) => `My name is ${name1 + " " + name2}`

console.log(NoName1("marten")("treimann"))


const numberArray = [1, 2, 3, 4, 5]

//const newArray = numberArray.map((n) => n + 5)

//console.log = ({newArray})


const newArray = numberArray.map((element, index, array) => {
    console.log({
        element: element,
        newElement: element + 5,
        index: index,
        array: array
    });
});