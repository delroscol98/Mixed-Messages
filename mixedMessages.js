//Mixed Messages Project is a an Ad-Lib Game where the computer will randomly choose inputs for the nouns, verbs, adverbs, adjectives


//Word containers
let nouns = ['boy', 'man', 'girl', 'woman', 'building', 'pubic hair', 'fist', 'thigh', 'drumstick', 'tower', 'soap', 'glove', 'big toe', 'dandruff', 'dry skin'];
let pronouns = ['I', 'me', 'you', 'he', 'him', 'she', 'her', 'it', 'they', 'them'];
let verbs = ['plays', 'salutes', 'lengthens', 'caresses', 'stimulates', 'grips', 'chooses', 'massages', 'pokes', 'hits', 'launches', 'tackles', 'controls', 'binds', 'thrusts'];
let adverbs = ['hungrily', 'quickly', 'sporadically', 'lustfully', 'engagingly', 'intently', 'decisively', 'fervently', 'charitably', 'lovingly', 'weirdly', 'creepily', 'holistically', 'funnily', 'dutifully'];
let adjectives = ['happy', 'sad', 'depressed', 'rainbow colored', 'smelly', 'fantastic', 'bizzare', 'outlandish', 'queer', 'vigorous', 'unyielding', 'bashful', 'borish', 'malnourished', 'sexy', 'attractive'];
let INGwords = ['running', 'fanning', 'leaping', 'harping', 'smelling', 'farting', 'watching', 'judging', 'viewing', 'lighting', 'staring', 'stalking', 'playing', 'cuddling', 'flexing', 'startling', 'growing']

//variables for random words
randomNoun = nouns[Math.floor(Math.random() * (nouns.length - 1))]
randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length - 1)]
randomVerb = verbs[Math.floor(Math.random() * (verbs.length - 1))]
randomAdverb = adverbs[Math.floor(Math.random() * (adverbs.length - 1))]
randomAdjective = adjectives[Math.floor(Math.random() * (adjectives.length - 1))]
randomING = INGwords[Math.floor(Math.random() * (INGwords.length - 1))]


//tests for random words
/*
console.log(randomNoun);
console.log(randomPronoun);
console.log(randomVerb);
console.log(randomAdverb);
console.log(randomAdjective);
console.log(randomING)
*/


//random word generator
let numberToWord = () => {
    let num = Math.floor(Math.random() * 5);

    if (num === 0) {
        console.log(randomNoun);
    } else if (num === 1) {
        console.log(randomVerb);
    } else if (num === 2) {
        console.log(randomAdverb);
    } else if (num === 3) {
        console.log(randomAdjective);
    } else if (num === 4) {
        console.log(randomING);
    }
};

for (let i = 0; i < 5; i++) {
    numberToWord()
;}
