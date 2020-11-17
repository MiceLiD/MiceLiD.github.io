import { createStore, MutationTree, ActionContext, ActionTree, GetterTree, Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex'
import { StateI, ListI, ThemeI } from './types'
export const themes: ThemeI[] = [
  { color: '#fff', backgroundColor: '#1c2d48' },
  { color: '#1c2d48', backgroundColor: 'aliceblue', border: '1px solid rgba(0, 0, 0, .06)' }
]

export enum MutationTypes {
  ADD_ITEM = 'ADD_ITEM',
  MOD_ITEM = 'MOD_ITEM',
  DEL_ITEM = 'DEL_ITEM',
  MOD_THEME = 'MOD_THEME'
}

export enum ActionTypes {
  add = 'add',
  mod = 'mod',
  del = 'del'
}

export type Mutations<S = StateI> = {
  [MutationTypes.ADD_ITEM](state: S, payload: ListI): void
  [MutationTypes.MOD_ITEM](state: S, payload: { item: ListI, index: number }): void
  [MutationTypes.DEL_ITEM](state: S, payload: number): void
  [MutationTypes.MOD_THEME](state: S, index: number): void
}

const mutations: MutationTree<StateI> & Mutations = {
  [MutationTypes.ADD_ITEM](state: StateI, payload: ListI) {
    state.todoList = [
      ...state.todoList,
      payload
    ]
  },
  [MutationTypes.MOD_ITEM](state, payload: { item: ListI, index: number }) {
    const { item, index } = payload
    state.todoList[index] = item
  },
  [MutationTypes.DEL_ITEM](state, payload: number) {
    state.todoList = [
      ...state.todoList.slice(0, payload),
      ...state.todoList.slice(payload + 1)
    ]
  },
  [MutationTypes.MOD_THEME](state, index: number) {
    state.theme = themes[index] || themes[0]
  }
}

type ArgumentActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<StateI, StateI>, 'commit'>


export interface Actions {
  [ActionTypes.add](
    { commit }: ArgumentActionContext,
    payload: ListI
  ): void
  [ActionTypes.mod](
    { commit }: ArgumentActionContext,
    payload: { item: ListI, index: number }
  ): void
  [ActionTypes.del](
    { commit }: ArgumentActionContext,
    payload: number
  ): void
}

export const actions: ActionTree<StateI, StateI> & Actions = {
  [ActionTypes.add]({ commit }, payload: ListI) {
    commit(MutationTypes.ADD_ITEM, payload)
  },
  [ActionTypes.mod]({ commit }, payload: { item: ListI, index: number }) {
    commit(MutationTypes.MOD_ITEM, payload)
  },
  [ActionTypes.del]({ commit }, payload: number) {
    commit(MutationTypes.DEL_ITEM, payload)
  }
}

export type Getters = {
  sortTodoList(state: StateI): ListI[]
}

const getters: GetterTree<StateI, StateI> & Getters = {
  sortTodoList(state) {
    return state.todoList.sort((a, b) => a.timestamp - b.timestamp)
  }
}

export type Store = Omit<
  VuexStore<StateI>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
}

const store = createStore<StateI>({
  state: {
    todoList: [
      {
        title: 'vuex4 types',
        done: false,
        timestamp: new Date().valueOf()
      },
      {
        title: 'vuex4 types',
        done: false,
        timestamp: new Date().valueOf()
      }
    ],
    theme: themes[0]
  },
  getters,
  actions,
  mutations
})

export const useStore = () => {
  return store as Store
}
