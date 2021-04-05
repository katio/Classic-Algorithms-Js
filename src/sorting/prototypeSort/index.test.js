let prototypeSort = require('./index')

describe('prototypeSort', () => {
  it('Should correctly order a list of 20 elements', () => {
    let unorderedList20 = [6,4,11,13,8,7,18,20,12,2,15,9,17,10,3,14,5,1,19,16]
    let preorderedList20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let orderedList20 = prototypeSort(unorderedList20)
console.table(orderedList20)
      expect(orderedList20).toEqual(preorderedList20)
  })
})