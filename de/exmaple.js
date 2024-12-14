const re = require('./SpellingRules.json');
console.log(re.consonants.length);
console.log(re.vowels.length);
console.log(re.compound.length);

const vowels = require('./Consonants.json').map(({ letter, ipa }) => {
  return { letter };
});

// vowels.push({
//   letter: 'ER',
//   ipa: 'ɐ',
// });
console.log(JSON.stringify(vowels));
