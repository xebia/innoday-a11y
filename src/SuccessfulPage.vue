<template>
  <main>
    <h1>Successful page</h1>
    <p>This page is fully WCAG 2.1 AAA compliant</p>
    <p><router-link to="/">This one isn't.</router-link></p>
  </main>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);
</script>

<style scoped>
a {
  color: #0033cc;
}
</style>
