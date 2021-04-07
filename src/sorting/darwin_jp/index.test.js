let darwin = require('./index')

describe('darwin sorting', () => {
  it('Should correctly order a list of 8 elements', () => {
    let unorderedList8 = [8, 2, 1, 6, 3, 7, 4, 5]
    let preorderedList8 =  [1, 2, 3, 4, 5, 6, 7, 8]
    let orderedList8 = darwin(unorderedList8)
console.table(orderedList8)
      expect(orderedList8).toEqual(preorderedList8)
  })
})