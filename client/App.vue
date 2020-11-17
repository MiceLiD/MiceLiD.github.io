<template>
  <div class="app-container">
    <header :style="theme">
      <div class="logo">sevenlee · Vite</div>
      <div class="moto">
        With you!
        <span 
          class="theme-box" 
          v-for="(theme, index) in themes" 
          :key="index" 
          :class="curThemeIndex === index ? 'active' : ''" 
          @click="switchTheme(index)"
          :style="theme"></span>
      </div>
    </header>
    <div class="app-content">
      <div class="app-router">
        <div class="app-router-item">
          <router-link to="/">home</router-link>
        </div>
        <div class="app-router-item">|</div>
        <div class="app-router-item">
          <router-link to="/todos">todos</router-link>
        </div>
        <div class="app-router-item">|</div>
        <div class="app-router-item">
          <router-link to="/jsx">jsx</router-link>
        </div>
      </div>
      <div class="view">
        <router-view></router-view>
      </div>
      <div class="footer">
        Power by sevenlee &copy; 2020
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, computed } from 'vue'
import useTheme from './composables/useTheme'

export default defineComponent({
  setup() {
    const { curThemeIndex, theme, themes, switchTheme } = useTheme()
    return {
      curThemeIndex,
      theme,
      themes,
      switchTheme
    }
  }
})

</script>

<style lang="less" scoped>
.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  header {
    width: 100%;
    height: 50px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #1c2d48;
    font-family: fantasy;
    .logo {
      padding: 0 20px;
      font-size: 30px;
    }
    .moto {
      text-align: right;
      padding: 0 20px;
      .theme-box {
        width: 12px;
        height: 12px;
        display: inline-block;
        margin: 0 5px;
        border: 1px solid rgb(253, 119, 246);
        cursor: pointer;
        position: relative;
        &.active {
          &::after {
            content: '\2713';
            position: absolute;
            left: 0;
            color: rgb(253, 119, 246);
            top: 0;
            font-size: 12px;
            width: 12px;
            height: 12px;
            text-align: center;
            line-height: 16px;
          }
        }
      }
    }
  }
  .app-content {
    flex: 1;
    overflow: scroll;
    background-color: aliceblue;
    .app-router {
      margin: 20px auto;
      padding: 0 40px;
      width: fit-content;
      position: relative;
      text-align: center;
      .app-router-item {
        font-style: italic;
        display: inline-block;
        padding: 8px 5px;
        a {
          display: inline-block;
          padding: 0 4px;
          &:hover {
            text-decoration: underline;
          }
        }
        a.router-link-active {
          background-color: #1c2d48d5;
          color: #ffffff;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
    .view {
      padding: 20px;
      overflow-y: scroll;
    }
    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 10px 0;
      text-align: center;
      color: #0000006b;
      background-color: aliceblue;
    }
  }
}
</style>

