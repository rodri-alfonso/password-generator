import { NUMBERS_LIST, LOWERCASE_LIST, SYMBOLS_LIST, UPPERCASE_LIST, TYPE_OF_LISTS } from './config.ts'

const { UPPERCASE, LOWERCASE, SYMBOLS, NUMBERS } = TYPE_OF_LISTS

export const purgedArray = (key, array) => array.filter((item) => item !== key)
export const getRandomInt = (max: number) => Math.floor(Math.random() * max)
export const getRandomCharacter = (characters) => characters[getRandomInt(characters.length - 1)]

export function generatePassword(length, config) {
	const getCharacterFromList = (listName) => {
		return {
			[UPPERCASE]: getRandomCharacter(UPPERCASE_LIST),
			[LOWERCASE]: getRandomCharacter(LOWERCASE_LIST),
			[SYMBOLS]: getRandomCharacter(SYMBOLS_LIST),
			[NUMBERS]: getRandomCharacter(NUMBERS_LIST),
		}[listName]
	}

	let password = ''
	for (let i = 0; i < length; i++) {
		const randomListName = config[getRandomInt(config.length)]
		password += getCharacterFromList(randomListName)
	}

	return password
}
