/* dado un string, reemplace las vocales con su correspondiente número
a=1 e=2 i=3 o=4 u=5
*/
/*
const str = "dado un string reemplace"

newPrhase = ""

for (let i=0; i < str.length; i++) {
console.log(str[i])

    //condicion
    if(str[i] === "a") {
        newPrhase += 1
    } else if (str === "e") { 
        newPrhase += 2
    } else if (str === "i") { 
        newPrhase += 3
    } else if (str === "o") { 
        newPrhase += 4
    } else if (str === "u") { 
        newPrhase += 5
    }else {
        newPrhase += str[i]
    }
}

console.log(newPrhase)
*/
/*
const str = 'Dado un string reemplaze'

function verifyLetter(str) {
    if (str === "a") { return 1}
    if (str === "e") { return 2}
    if (str === "i") { return 3}
    if (str === "o") { return 4}
    if (str === "u") { return 5}
    else {return str}
}

let newVariable = ""
for (let i=0; i < str.length; i++) {
    newVariable += verifyLetter(str[i])
} 

console.log(newVariable)
*/
/*
const str = 'Dado un string reemplaze'

function verifyLetter(str) {
  if (str === 'a') return 1
  if (str === 'e') return 2
  if (str === 'i') return 3
  if (str === 'o') return 4
  if (str === 'u') return 5
  return str
}

for (let i = 0; i < str.length; i++) {
  str.replace(/a/g, "1")
  str.replace(/b/g, "2") 
  str.replace(/c/g, "3") 
  str.replace(/d/g, "4") 
  str.replace(/e/g, "5") 
}

console.log(str)
*/



//Crear una función, recibe dos valores un str y un numero
// si la long del str > numero retunr los caracteres que me de el número
// si es menor return str + numero de espacios
//ejemplo== mimamamemima -- 3 -> mim
//ejemplo== mama -- 6 --> mama__


/*

function solution(str, num) {
    
    if (str.length > num) {
        return str.substring(0, num)
    } 
    if (str.length < num) {
        for (let i = str.length; i < num; i++) {
           str += "_"
        }
        return str
    }
}

console.log(solution("mama", 6))
*/
/*
let str = "Dado un strign reemplace"

const mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
  ]  

for (let i = 0; i < mat.length; i++){
    for (let j = 0; j < mat[i].length; j++) {

        console.log(mat[i][j])

    }
}*//*

const num= [[1,30,5,9,10], [22,2,33,3,44],[24,53,12,6],[4,5,22,9]]

function name(params) {
    
}
for (let i = 0; i < mat.length; i++){

}
*/