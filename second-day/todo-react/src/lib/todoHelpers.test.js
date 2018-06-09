import { addTodo, findById, toggleTodo, updateTodo } from './todoHelpers';
import { not } from 'ip';

test('addTodo should add the passed todo to the list', () => {
  //Arrange
  const startTodos = [
    { id: 1, name: 'one', isComplete: false},
    { id: 2, name: 'two', isComplete: false}
  ]
  const newTodo = { id: 3, name: 'three', isComplete: false }

  const expected = [
    { id: 1, name: 'one', isComplete: false},
    { id: 2, name: 'two', isComplete: false},
    { id: 3, name: 'three', isComplete: false}
  ]

  //Act
  const result = addTodo(startTodos, newTodo)

  //Assert
  expect(result).toEqual(expected)
})

test('addTodo should not mutate the existing todo array', () => {
  //Arrange
  const startTodos = [
    { id: 1, name: 'one', isComplete: false},
    { id: 2, name: 'two', isComplete: false}
  ]
  const newTodo = { id: 3, name: 'three', isComplete: false }
  
  const expected = [
    { id: 1, name: 'one', isComplete: false},
    { id: 2, name: 'two', isComplete: false},
    { id: 3, name: 'three', isComplete: false}
  ]

  // Act
  const result = addTodo(startTodos, newTodo)

  // Assert
  expect(result).not.toBe(expected)
})

test('findById should return the expected item from an array', () => {
  // Arrange
  const startTodos = [
    { id: 1, name: 'one', isComplete: false},
    { id: 2, name: 'two', isComplete: false},
    { id: 3, name: 'three', isComplete: false}
  ]
  const expected = { id: 2, name: 'two', isComplete: false}
  const result = findById(2, startTodos)
  expect(result).toEqual(expected);
})

test('toggleTodo should toggle the isComplete prop of a todo', () =>{
  const startTodo = { id: 2, name: 'two', isComplete: false}
  const expected = { id: 2, name: 'two', isComplete: true}

  const result = toggleTodo(startTodo)

  expect(result).toEqual(expected)
})

test('toggleTodo should not mutate the original todo', () => {
  // Arrange
  const startTodo = { id: 2, name: 'two', isComplete: false}
  // Act
  const result = toggleTodo(startTodo)
  //Assert
  expect(result).not.toBe(startTodo)
})

test('updateTodo should update an item by id', () => {
  const startTodo = [
    { id: 1, name: 'one', isComplete: false},
    { id: 2, name: 'two', isComplete: false},
    { id: 3, name: 'three', isComplete: false}
  ]
  const updatedTodo = { id: 3, name: 'three', isComplete: true}

  const expectedTodos = [
    { id: 1, name: 'one', isComplete: false},
    { id: 2, name: 'two', isComplete: false},
    { id: 3, name: 'three', isComplete: true}
  ]
  
  const result = updateTodo(startTodo, updatedTodo)

  expect(result).toEqual(expectedTodos)
})

test('update should not mutate the original array', () => {
  const startTodos = [
    { id: 1, name: 'one', isComplete: false},
    { id: 2, name: 'two', isComplete: false},
    { id: 3, name: 'three', isComplete: false}
  ]
  const updatedTodo =  { id: 3, name: 'three', isComplete: true}

  const result = updateTodo(startTodos, updatedTodo)

  expect(result).not.toBe(startTodos)
})

test('update should not mutate the updated item', () => {
  const startTodos = [
    { id: 1, name: 'one', isComplete: false},
    { id: 2, name: 'two', isComplete: false},
    { id: 3, name: 'three', isComplete: false}
  ]
  const updatedTodo =  { id: 3, name: 'three', isComplete: true}

  const result = updateTodo(startTodos, updatedTodo)

  expect(result[1]).not.toBe(updatedTodo)
})

test.skip('', () => {})