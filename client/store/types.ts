export interface ListI {
  title: string
  done: boolean
  timestamp: number
}

export interface StateI {
  todoList: ListI[]
}
