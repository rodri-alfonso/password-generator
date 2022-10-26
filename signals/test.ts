import { Signal, signal } from '@preact/signals'
import { TYPE_OF_LISTS } from '../lib/config.ts'

const { LOWERCASE, UPPERCASE, NUMBERS, SYMBOLS } = TYPE_OF_LISTS

export type ConfigType = 'LOWERCASE' | 'UPPERCASE' | 'SYMBOLS' | 'NUMBERS'

export const password: Signal<string> = signal('')
export const length: Signal<number> = signal(10)
export const config: Signal<Array<string>> = signal([LOWERCASE, UPPERCASE, SYMBOLS, NUMBERS])
