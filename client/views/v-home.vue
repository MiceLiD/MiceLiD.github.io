<template>
  <div class="home">
    <h1>Welcome!</h1>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import WriteJsx from '../components/WriteJsx'

export default defineComponent({
  components: {
    WriteJsx
  },
  setup() {
    return {}
  }
})
</script>
<style lang="less" scoped>
.home {
  text-align: center;
  h1 {
    margin-top: 100px;
  }
}
</style>

