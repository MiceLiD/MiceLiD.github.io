<template>
  <div class="todo-wrapper" v-if="todoItem" :style="todoItem.done ? { textDecoration: 'line-through' } : {}">
    <div class="todo-title">{{ todoItem.title }}</div>
    <div class="todo-btn" @click="onDel">del</div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { ListI } from '../store/types'

export default defineComponent({
  props: {
    todoItem: {
      type: Object,
      default: null
    }
  },
  methods: {
    onDel() {
      this.$emit('on-del')
    }
  }
})
</script>

<style lang="less" scoped>
.todo-wrapper {
  text-align: center;
  margin-bottom: 10px;
  .todo-title {
    display: inline-block;
    border-bottom: 1px solid #f60;
  }
  .todo-btn {
    display: inline-block;
    border: 1px solid red;
    padding: 2px 3px;
    border-radius: 4px;
    margin-left: 10px;
  }
}
</style>

