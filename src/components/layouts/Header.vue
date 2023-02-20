<script setup lang="ts"></script>

<template>
  <h1>
    <span class="test-header">Header</span>
  </h1>
  <button class="btn-primary">test</button>
</template>

<style scoped lang="scss">
@tailwind components;

@layer components {
  h1 {
    & .test-header {
      @apply text-red-600;
      @apply text-3xl;
    }
  }
}
</style>
