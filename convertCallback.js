// const asyncUpperCase = (name, callback) => {
// 	setTimeout(() => {
// 		if (!name) return callback(new Error('no first name passed in!'))
// 		return callback( name.toUpperCase())
// 	}, 2000)
// }

// const prettyPrint = (word)=>{
// 	console.log(`lala${word}lala`)
// }
// asyncUpperCase('a', prettyPrint)

const asyncUpperCaseP = (name) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!name) {
				reject(new Error('no first name passed in!'))
			} else {
				const uperName =  `lala${name.toUpperCase()}lala`
				resolve(uperName)
			}
		}, 2000)
	})
}

asyncUpperCaseP().then(console.log)