<template>
  <div class="app">
    <h2>Vite-Vue3 Todo</h2>
    <ul>
      <li v-for="(todo, index) in todoList" :key="todo.timestamp">
        <Todo :todoItem="todo" @on-del="onDel(index)" />
      </li>
    </ul>
    <Add @on-add="onAdd" />
  </div>
</template>


<script lang="ts">
import { defineComponent, computed } from 'vue'
// import HelloWorld from '@/components/HelloWorld'
import Todo from './components/Todo.vue'
import Add from './components/Add.vue'
import { useStore, ActionTypes } from './store'
import { ListI } from './store/types'

export default defineComponent({
  components: {
    Todo,
    Add
  },
  name: 'App',
  methods: {
    onAdd: (item: ListI) => {
      const store = useStore()
      store.dispatch(ActionTypes.add, item)
      return true
    },
    onDel: (index: number) => {
      const store = useStore()
      store.dispatch(ActionTypes.del, index)
    }
  },
  setup() {
    const store = useStore()
    const todoList = computed(() => store.state.todoList)
    return {
      todoList
    }
  }
})

</script>

<style lang="less" scoped>
li {
  list-style: none;
}
</style>

