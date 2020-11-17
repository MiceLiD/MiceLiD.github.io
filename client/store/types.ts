export interface ListI {
  title: string
  done: boolean
  timestamp: number
}

export interface ThemeI {
  [p: string]: string
}

export interface StateI {
  todoList: ListI[],
  theme: ThemeI
}
