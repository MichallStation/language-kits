const re = require('./SpellingRules.json');
const fs = require('fs');
console.log(re.consonants.length);
console.log(re.vowels.length);
console.log(re.compound.length);

// const vowels = require('./Consonants.json').map(({ letter, ipa }) => {
//   return { letter };
// });

// vowels.push({
//   letter: 'ER',
//   ipa: 'ɐ',
// });
// console.log(JSON.stringify(vowels));
// const ipas = require('./ipas.json');
// const pattern = (letter, ipa) =>
//   `Keep in mind that words with '${letter}' most commonly have the sound '${ipa}'. However, there are still other possibilities.`;
// const result = require('./added.json').map((item) => {
//   const { type } = item;

//   return {
//     ...item,
//     type: type.toUpperCase(),
//     note: pattern(type.toUpperCase(), ipas[type]),
//   };
// });
// console.log(result);
// fs.writeFileSync('./result.json', JSON.stringify(result));
