import { createContext, useReducer, useContext } from 'react'
import { TYPE_OF_LISTS } from '../lib/config'

const { UPPERCASE, LOWERCASE, SYMBOLS, NUMBERS } = TYPE_OF_LISTS

const SET_CONFIG = 'SET_CONFIG'
const SET_MAX_LENGTH = 'SET_MAX_LENGTH'
const SET_PASSWORD = 'SET_PASSWORD'

const initialState = {
	password: '',
	length: 0,
	config: [LOWERCASE, UPPERCASE, SYMBOLS, NUMBERS],
}

function configReducer(state, action) {
	/* eslint-disable indent */
	switch (action.type) {
		case SET_CONFIG:
			return { ...state, config: action.payload }
		case SET_MAX_LENGTH:
			return { ...state, length: action.payload }
		case SET_PASSWORD:
			return { ...state, password: action.payload }
		default:
			return state
	}
	/* eslint-enable indent */
}

const ConfigContext = createContext()

const ConfigProvider = ({ children }) => {
	const [state, dispatch] = useReducer(configReducer, initialState)

	return <ConfigContext.Provider value={{ ...state, dispatch }}>{children}</ConfigContext.Provider>
}

function useConfig() {
	const context = useContext(ConfigContext)
	const { dispatch, config, length, password } = context

	const setConfig = (payload) => dispatch({ type: SET_CONFIG, payload })
	const setLength = (length) => dispatch({ type: SET_MAX_LENGTH, payload: length })
	const setPassword = (password) => dispatch({ type: SET_PASSWORD, payload: password })

	return { config, length, password, setConfig, setLength, setPassword }
}

export { ConfigProvider, useConfig }
