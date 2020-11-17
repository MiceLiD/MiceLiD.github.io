<template>
  <div class="sv-btn-wrapper" @click="onClick" :class="type">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick(e: Event) {
      this.$emit('click')
    }
  }
})
</script>

<style lang='less' scoped>
.sv-btn-wrapper {
  border-radius: 3px;
  padding: 4px 10px;
  background-color: #eeeded;
  color: #000;
  cursor: pointer;
  &.primary {
    background-color: #1c2d48;
    color: #ffffff;
  }
  &.error {
    background-color: rgb(245, 39, 39);
    color: #ffffff;
  }
}
</style>