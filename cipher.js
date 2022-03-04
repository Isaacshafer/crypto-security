// shift each letter by two down the alphabet. z wraps around to a.

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

funcDecipher = (str, arr) => {
    let newCiph = []
    let splitStr = str.split('')
    for(let i = 0; i < splitStr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(splitStr[i]=== arr[j]){
                newCiph.push(arr[j+2])
            }
        }
    }
    let strCiph = newCiph.join('')
    return strCiph
    
}
funcDecipher = (str, arr) => {
    let newCiph = []
    let splitStr = str.split('')
    for(let i = 0; i < splitStr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(splitStr[i]=== arr[j]){
                newCiph.push(arr[j-2])
            }
        }
    }
    let strCiph = newCiph.join('')
    return strCiph
    
}
console.log(funcDecipher('I love cryptography', alphabet))
console.log(funcDecipher('nqxgetrvqitcrj', alphabet))