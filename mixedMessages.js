//Mixed Messages Project is a random, non-sensical message generator


//Word containers
let nouns = ['boy', 'man', 'girl', 'woman', 'building', 'pubic hair', 'fist', 'thigh', 'drumstick', 'tower', 'soap', 'glove', 'big toe', 'dandruff', 'dry skin'];
let pronouns = ['I', 'me', 'you', 'he', 'him', 'she', 'her', 'it', 'they', 'them'];
let verbs = ['plays', 'salutes', 'lengthens', 'caresses', 'stimulates', 'grips', 'chooses', 'massages', 'pokes', 'hits', 'launches', 'tackles', 'controls', 'binds', 'thrusts'];
let adverbs = ['hungrily', 'quickly', 'sporadically', 'lustfully', 'engagingly', 'intently', 'decisively', 'fervently', 'charitably', 'lovingly', 'weirdly', 'creepily', 'holistically', 'funnily', 'dutifully'];
let adjectives = ['happy', 'sad', 'depressed', 'rainbow colored', 'smelly', 'fantastic', 'bizzare', 'outlandish', 'queer', 'vigorous', 'unyielding', 'bashful', 'borish', 'malnourished', 'sexy', 'attractive'];
let INGwords = ['running', 'fanning', 'leaping', 'harping', 'smelling', 'farting', 'watching', 'judging', 'viewing', 'lighting', 'staring', 'stalking', 'playing', 'cuddling', 'flexing', 'startling', 'growing']

//access to random words
/*
nouns[Math.floor(Math.random() * (nouns.length - 1))]
pronouns[Math.floor(Math.random() * (pronouns.length - 1))]
verbs[Math.floor(Math.random() * (verbs.length - 1))]
adverbs[Math.floor(Math.random() * (adverbs.length - 1))]
adjectives[Math.floor(Math.random() * (adjectives.length - 1))]
INGwords[Math.floor(Math.random() * (INGwords.length - 1))]
*/

//function that attaches numbers to words
const numberToWord = () => {
    let num = Math.floor(Math.random() * 6)

    if (num === 0) {
        return (nouns[Math.floor(Math.random() * (nouns.length - 1))])
    } else if (num === 1) {
        return (pronouns[Math.floor(Math.random() * (pronouns.length - 1))])
    } else if (num === 2) {
        return (verbs[Math.floor(Math.random() * (verbs.length - 1))])
    } else if (num === 3) {
        return (adverbs[Math.floor(Math.random() * (adverbs.length - 1))])
    } else if (num === 4) {
        return (adjectives[Math.floor(Math.random() * (adjectives.length - 1))])
    } else if (num === 5) {
        return (INGwords[Math.floor(Math.random() * (INGwords.length - 1))])
    }
}

//function that puts the random words into an array and returns a string of 100 words
const randomWords = () => {
    mixedArr = [];

    for (let i = 0; i < 100; i++) {
        mixedArr.push(numberToWord())
    }

    return mixedArr.join(' ');

}

console.log(randomWords())