import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { StateI } from './store/types'

declare module '@vue/runtime-core' {
  
  interface ComponentCustomProperties {
    $store: Store<StateI>
  }
}
declare module 'vuex' {
  export function useStore(key?: string): Store<StateI>
}
