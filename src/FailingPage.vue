<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" />
    </a>
  </div>
  <div class="title">A11Y testing</div>

  <p>This page has a lot of accessibility issues.</p>
  <p><router-link to="/success">This page</router-link> doesn't.</p>

  <div class="card">
    <div class="btn" @click="count++">count is {{ count }}</div>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);
</script>

<style>
.title {
  font-size: 28px;
  font-weight: bold;
}
.btn {
  border: 1px solid #888;
  cursor: pointer;
  display: inline-block;
  padding: 0.25rem;
  border-radius: 4px;
}
.read-the-docs {
  color: #888;
}
</style>
