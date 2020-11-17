import { ListI } from '@/store/types'
import { computed } from 'vue'
import { useStore, ActionTypes } from '../store'

export default function useTodos() {
  const store = useStore()
  const todoList = computed(() => store.state.todoList)
  const onAdd = (item: ListI) => {
    store.dispatch(ActionTypes.add, item)
  }
  const onDel = (index: number) => {
    store.dispatch(ActionTypes.del, index)
  }
  return {
    todoList,
    onAdd,
    onDel
  }
}
