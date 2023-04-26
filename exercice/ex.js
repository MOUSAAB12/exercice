// function closestTo100(a, b) {
//     let result;
//     if((100 - a) >= (100 - b)) {
//         result = a ;
//     }else{
//         result = b ;
//     }
//     return result;
// } 



// console.log(closestTo100(99, 1))
// console.log(closestTo100(49, 51))
// console.log(closestTo100(50, 50))
// console.log(closestTo100(3000, 100))


// const countEvent = (arr) =>
// arr.filter(num => num % 2 === 0).length;

// console.log(countEvent([1,2,3,4,5,6]))
// console.log(countEvent([2,2,2,2,2,2]))
// console.log(countEvent([8,5,7,9,10,100]))




// const countEvent = (arr) =>
// arr.filter(num => num % 2 === 0).length;
// const createArray = (num) => {
//     const returnArray = [];
//     for(let i = 1; i < num; i += 1){
//         returnArray.push(i);
//     }
//     return returnArray;
// }
// console.log(countEvent(createArray(6)))
// console.log(countEvent(createArray(9)))





// const isAscend = (arr) => {
//     for(let i = 0; i < arr.length; i+=1){
//         if(arr[i+1] < arr[i])
//         return false
//     }
//     return true;
// } 
// console.log(isAscend([1,2,3,4,5,6]))
// console.log(isAscend([1,2,5,4,5,6]))
// console.log(isAscend([1,2,3,4,5,6]))



// const largEvent = (arr) =>
//    Math.max(...arr.filter(num => num % 2 === 0))
//    console.log(largEvent([1,2,3,4,5,6]))
//    console.log(largEvent([1,2,33,4,5,6]))
//    console.log(largEvent([1,2,33,44,55,6]))


// const isLeapYear = (year) => year % 4 === 0;
// console.log(isLeapYear(2000)) 
// console.log(isLeapYear(2008)) 
// console.log(isLeapYear(2014)) 
// console.log(isLeapYear(2015)) 
// console.log(isLeapYear(2016)) 
// console.log(isLeapYear(2017)) 
// console.log(isLeapYear(2018)) 
// console.log(isLeapYear(2020)) 








// const parseCSV = (csvString) =>
//     csvString.split('\n').map(row => row.split(','));

// const str = `abc,def,ghi
// jkl,mno,Pqr
// stu,vwx,yza`;
// console.log(parseCSV(str));



// const randomHexNumber = () =>
//     Math.floor(Math.random() * 16).toString(16);
// const randomHexColor = () => '#' + Array.from({length: 6}).map(randomHexNumber).join('');
// console.log(randomHexColor())
// console.log(randomHexColor())
// console.log(randomHexColor())
// console.log(randomHexColor())




// const character = [
//     {
//         name: 'mark luyn',
//         height: 172,
//         mass: 77,
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'jim vard',
//         height: 178,
//         mass: 80,
//         eye_color: 'brown',
//         gender: 'male',
//     },
//     {
//         name: 'john vadeler',
//         height: 182,
//         mass: 85,
//         eye_color: 'green',
//         gender: 'male',
//     },
//     {
//         name: 'lora more',
//         height: 163,
//         mass: 67,
//         eye_color: 'blue',
//         gender: 'female',
//     }
// ]


// const greater100Characters = character.filter((character) => character.mass > 100 );
//     console.log(greater100Characters)
// const shorterCharacter = character.filter((character) => character.height < 200);
//     console.log(shorterCharacter);
// const maleCharacter = character.filter((character) => character.gender === 'male');
//     console.log(maleCharacter);
// const femaleCharacter = character.filter((character) => character.gender === 'female');
//     console.log(femaleCharacter);






// const character = [
//     {
//         name: 'mark luyn',
//         height: 172,
//         mass: 77,
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'jim vard',
//         height: 178,
//         mass: 80,
//         eye_color: 'brown',
//         gender: 'male',
//     },
//     {
//         name: 'john vadeler',
//         height: 182,
//         mass: 85,
//         eye_color: 'green',
//         gender: 'male',
//     },
//     {
//         name: 'lora more',
//         height: 163,
//         mass: 67,
//         eye_color: 'blue',
//         gender: 'female',
//     }
// ]

// const names = character.map((character) => character.name);
//    console.log(names);
// const masses = character.map((character) => character.mass);
//    console.log(masses);
//    const heights = character.map((character) => character.height);
//    console.log(heights);
// const minifiedRecords = character.map((character) => (
//     {
//         name: character.name,
//         height: character.height,
//     }
// ));
//    console.log(minifiedRecords);
// const firstNames = character.map((character) => character.name.split(" ")[0]);
//    console.log(firstNames);



// const character = [
//     {
//         name: 'mark luyn',
//         height: 172,
//         mass: 77,
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'jim vard',
//         height: 178,
//         mass: 80,
//         eye_color: 'brown',
//         gender: 'male',
//     },
//     {
//         name: 'john vadeler',
//         height: 182,
//         mass: 85,
//         eye_color: 'green',
//         gender: 'male',
//     },
//     {
//         name: 'lora more',
//         height: 163,
//         mass: 67,
//         eye_color: 'blue',
//         gender: 'female',
//     }
// ]

// const oneMaleCharacter = character.some((character) =>  character.gender === 'male'
// );
// console.log(oneMaleCharacter);
// const oneBlueEye = character.some((character) =>  character.eye_color === 'blue'
// );
// console.log(oneBlueEye);
// const oneTallerThan200 = character.some((character) =>  character.height > 200
// );
// console.log(oneTallerThan180);
// const oneMassLessThen77 = character.some((character) =>  character.mass < 77
// );
// console.log(oneMassLessThen77);



// const character = [
//     {
//         name: 'mark luyn',
//         height: 172,
//         mass: 77,
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'jim vard',
//         height: 178,
//         mass: 80,
//         eye_color: 'brown',
//         gender: 'male',
//     },
//     {
//         name: 'john vadeler',
//         height: 182,
//         mass: 85,
//         eye_color: 'green',
//         gender: 'male',
//     },
//     {
//         name: 'lora more',
//         height: 163,
//         mass: 67,
//         eye_color: 'blue',
//         gender: 'female',
//     }
// ]

// const byMass = character.sort((a, b) =>  b.mass - a.mass);
// console.log(byMass)
// const byHeight = character.sort((a, b) =>  b.height - a.height);
// console.log(byHeight)
// const byName = character.sort((a, b) =>{
//     if(a.name < b.name)
//     return 1;
//     return -1;
// });
// console.log(byName)
// const byGender = character.sort((a, b) =>  {
//     if(a.name === 'female')
//     return 1;
//     return -1;
// });
// console.log(byGender)


// const character = [
//     {
//         name: 'mark luyn',
//         height: 172,
//         mass: 77,
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'jim vard',
//         height: 178,
//         mass: 80,
//         eye_color: 'brown',
//         gender: 'male',
//     },
//     {
//         name: 'john vadeler',
//         height: 182,
//         mass: 85,
//         eye_color: 'green',
//         gender: 'male',
//     },
//     {
//         name: 'lora more',
//         height: 163,
//         mass: 67,
//         eye_color: 'blue',
//         gender: 'female',
//     }
// ]
// const totalMass = character.reduce((acc, cur) => acc + cur.mass, 0);
// console.log(totalMass);
// const totalHeight= character.reduce((acc, cur) => acc + cur.height, 0);
// console.log(totalHeight);
// const characterByEyeColor = character.reduce((acc, cur) => {
//     const color = cur.eye_color;
//     if(acc[color]){
//         acc[color]++;
//     }else{
//         acc[color]=1
//     }
//     return acc;
// }, {});
// console.log(characterByEyeColor);
// const totalNameCharacter= character.reduce((acc, cur) => acc + cur.name.length, 0);
// console.log(totalNameCharacter);



const character = [
    {
        name: 'mark luyn',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'jim vard',
        height: 178,
        mass: 80,
        eye_color: 'brown',
        gender: 'male',
    },
    {
        name: 'john vadeler',
        height: 182,
        mass: 85,
        eye_color: 'green',
        gender: 'male',
    },
    {
        name: 'lora more',
        height: 163,
        mass: 67,
        eye_color: 'blue',
        gender: 'female',
    }
] 
const allBlueEyes = character.every((character) => character.eye_color === 'blue');
console.log(allBlueEyes);
const allMassMoreThan60 = character.every((character) => character.mass > 65);
console.log(allMassMoreThan60);
const allShorterThan180 = character.every((character) => character.height < 180);
console.log(allShorterThan180);
const allMale = character.every((character) => character.gender === 'male');
console.log(allMale);