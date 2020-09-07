<template>
  <div class="add">
    <input ref="input" type="text" v-model="todoTitle" />
    <button @click="onAdd">add</button>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ListI } from '../store/types'

export default defineComponent({
  name: 'Add',
  methods: {
    onAdd() {
      if (!this.todoTitle) {
        this.$refs.input.focus()
        return
      }
      this.$emit('on-add', {
        timestamp: new Date().valueOf(),
        title: this.todoTitle,
        done: false
      })
      this.todoTitle = ''
    }
  },
  setup() {
    const todoTitle = ref('')
    return {
      todoTitle
    }
  }
})
</script>