export const addTodo = (list, item) => {
  //return list.concat(item);
  return [...list, item]
}

export const generateId = () => Math.floor(Math.random()*1000)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleTodo = todo => ({ ...todo, isComplete: !todo.isComplete })

export const updateTodo = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id )
  return [
    ...list.slice(0, updatedIndex),
    {...updated},
    ...list.slice(updatedIndex + 1)
  ]
}