import { MutationTypes, useStore, themes } from '../store';
import { computed, ref } from 'vue'

export default function useTheme() {
  const store = useStore()
  const curThemeIndex = ref(0)
  const theme = computed(() => store.state.theme)
  const switchTheme = (index: number) => {
    store.commit(MutationTypes.MOD_THEME, index)
    curThemeIndex.value = index
  }
  return {
    curThemeIndex,
    theme,
    themes,
    switchTheme
  }
}
