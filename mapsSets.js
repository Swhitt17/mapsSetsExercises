[1,2,3,4]

"ref"

//0:  {Array(3) => true}
//1: {Array(3) => false}

const hasDuplicate = arr => newSet(arr).size !== arr.length

function isVowel(char){
 return"aeiou".includes(char)
}

function vowelCount(str){
const vowelMap = new Map();
for ( let char of str){
    let lowerCased = char.toLowerCase()
    if(isVowel(lowerCased)){
        if(isVowel.has(lowerCased)){
            vowelMap.set(lowerCased.vowelMap.get(lowerCased) + 1);
        }
        else{
            vowelMap.set(lowerCased, 1);
        }
    }
}
return vowelMap;
}

