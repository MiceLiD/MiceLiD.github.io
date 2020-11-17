<template>
  <div class="todo-wrapper" v-if="todoItem" :style="todoItem.done ? { textDecoration: 'line-through' } : {}">
    <div class="todo-title">{{ todoItem.title }}</div>
    <Button type="error" @click="onDel">del</Button>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { ListI } from '../store/types'
import Button from './dumb/Button.vue'

export default defineComponent({
  components: { Button },
  props: {
    todoItem: {
      type: Object,
      default: null
    }
  },
  methods: {
    onDel() {
      this.$emit('del')
    }
  }
})
</script>

<style lang="less" scoped>
.todo-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  .todo-title {
    flex: 1;
    border-bottom: 1px dashed rebeccapurple;
    text-align: left;
    margin-right: 10px;
  }
  .todo-btn {
    border: 1px solid rgb(150, 145, 145);
    padding: 2px 5px;
    border-radius: 4px;
  }
}
</style>

