import { defineComponent, ref, reactive, computed, watch, watchEffect } from 'vue'

export default defineComponent({
  setup() {
    const count = reactive({ value: 1 })
    const times = computed(() => count.value)
    const stop = watchEffect(() => {
      console.log('watch effect: ', count.value)
    })
    setTimeout(() => {
      console.log('stop watch effect')
      stop()
    }, 3000)

    watch(
      () => count.value,
      (count, preCount) => {
        console.log(`[watch count]: preCount is ${preCount}; now is ${count}`)
      }
    )

    watch(
      [ () => count.value, () => times.value ],
      ([count, times], [preCount, preTimes]) => {
        console.log(`[multi-watch count]: preCount is ${preCount}; now is ${count}`)
        console.log(`[multi-watch times]: preTimers is ${preTimes}; now is ${times}`)
      }
    )
    return () => (
      <>
        <button onClick={ () => count.value++ }>add { count.value }</button>
        <div>点击次数：{ times.value }</div>
      </>
    )
  }
})