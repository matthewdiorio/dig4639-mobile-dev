import { Sum, AddList } from './MyMath.js'

describe("Sum", () => {
test('adds 1 + 2 to equal 3', () => {
  expect(Sum(1, 2)).toBe(3)
})
test('Whether undefined is returned on invalid type', () => {
  expect(Sum(1, "test")).toBeUndefined()
})
test('produces the sum of 10 + 20 whic should be 30', () => {
  expect(Sum(10, 20)).toBe(30)
})
})


describe("AddList", () => {
  test('adds list of numbers together', () => {
    let myList = [1,2,3]
    let result = AddList(myList)
    expect(result).toBe(6)
    myList = [2,2,3]
    result = AddList(myList)
    expect(result).toBe(7)
  })
  test('test undefined', () => {
    let myList = []
    let result = AddList(myList)
    expect(result).toBeUndefined()
  })
  })






// ICE 

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
