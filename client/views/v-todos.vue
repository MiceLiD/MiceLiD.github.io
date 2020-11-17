<template>
  <div class="todos-wrapper">
    <h2>Vite-Vue3 Todo</h2>
    <div class="todos-list">
      <div class="todos-list-item" v-for="(todo, index) in todoList" :key="index">
        <TodoItem :todo-item="todo" @del="onDel(index)" />
      </div>
      <AddTodoItem @add="onAdd" />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, computed } from 'vue'
import TodoItem from '../components/TodoItem.vue'
import AddTodoItem from '../components/AddTodoItem.vue'
import useTodos from '../composables/useTodos'
import { ListI } from '../store/types'

export default defineComponent({
  components: { TodoItem, AddTodoItem },
  setup() {
    const { todoList, onAdd, onDel } = useTodos()
    return {
      todoList,
      onAdd,
      onDel
    }
  }
})

</script>

<style lang="less" scoped>
.todos-wrapper {
  text-align: center;
  .todos-list {
    margin: 10px auto;
    width: 40%;
  }
}
</style>


