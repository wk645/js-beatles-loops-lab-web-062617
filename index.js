function theBeatlesPlay(musician, instrument) {
	let array = []

	for (let i = 0; i < musician.length; i++) {
		array.push(`${musician[i]} plays ${instrument[i]}`)

	} 
	return array
}

function johnLennonFacts(facts) {
	let array = []
	let i = 0

	while (i < facts.length) {
		array.push(facts[i] + "!!!")
		i++
	}
	return array
}

// do {
//   [loopBody];
// } while ([condition]);

function iLoveTheBeatles(n) {
	let array = []

	do {
		array.push("I love the Beatles!")
		n++
	} while (n < 15)
	return array
}