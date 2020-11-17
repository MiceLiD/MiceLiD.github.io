<template>
  <div class="add-wrapper">
    <input ref="input" type="text" v-model="todoTitle" />
    <Button type="primary" @click="onAdd">add</Button>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ListI } from '../store/types'
import Button from './dumb/Button.vue'

export default defineComponent({
  components: {
    Button
  },
  methods: {
    onAdd() {
      if (!this.todoTitle) {
        this.$refs.input.focus()
        return
      }
      this.$emit('add', {
        timestamp: new Date().valueOf(),
        title: this.todoTitle,
        done: false
      })
      this.todoTitle = ''
    }
  },
  mounted() {
    this.onAdd()
  },
  setup() {
    const todoTitle = ref('')
    return {
      todoTitle
    }
  }
})
</script>

<style lang="less" scoped>
.add-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  input {
    flex: 1;
    border-bottom: 1px solid rebeccapurple;
    margin-right: 10px;
  }
  .add-btn {
    border: 1px solid rgb(150, 145, 145);
    padding: 2px 5px;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
