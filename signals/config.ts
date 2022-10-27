import { Signal, signal } from '@preact/signals'

export type ConfigType = 'LOWERCASE' | 'UPPERCASE' | 'SYMBOLS' | 'NUMBERS'

export const password: Signal<string> = signal('')
export const length: Signal<number> = signal(10)
export const config: Signal<Array<ConfigType>> = signal(['UPPERCASE', 'LOWERCASE', 'SYMBOLS', 'NUMBERS'])
