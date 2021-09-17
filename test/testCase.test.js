const vowel_counter = require('../VowelCounter')

test('Case# #1: Null param', () => {
    expect(vowel_counter()).toBe('ArgumentNullException')
})


test('Case# #2: Null param', () => {
    expect(vowel_counter(' ')).toStrictEqual({})
})

test('Case# #3: Number Type param', () => {
    expect(vowel_counter(2341)).toStrictEqual({})
})

test('Case# #4 Text: Hola@mundo.com', () => {
    expect(vowel_counter('Hola@mundo.com')).toBe(5)
})

test('Case# #5 Text: INS-368', () => {
    expect(vowel_counter('INS-368')).toBe(1)
})

test('Case# #6 Text: Murcielago x MURCIELAGO = mUrciElagO cuadrado', () => {
    expect(vowel_counter('Murcielago x MURCIELAGO = mUrciElagO cuadrado')).toBe(19)
})