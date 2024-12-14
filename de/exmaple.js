const re = require('./SpellingRules.json');
console.log(re.consonants.length);
console.log(re.vowels.length);
console.log(re.compound.length);

const vowels = require('./Vowels.json').map(({ letter, ipa }) => {
  return { letter, ipa };
});

vowels.push({
  letter: 'ER',
  ipa: 'ɐ',
});
console.log(JSON.stringify(vowels));
