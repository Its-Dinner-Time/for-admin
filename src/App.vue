<script setup lang="ts">
import { Layouts } from '@/components';
</script>

<template>
  <div class="app-container">
    <header>
      <Layouts.HeaderVue></Layouts.HeaderVue>
    </header>

    <aside>
      <Layouts.SidebarVue></Layouts.SidebarVue>
    </aside>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  display: grid;
  grid-template-areas:
    'aside head'
    'aside main';
  grid-template-columns: minmax(100px, max-content) 1fr;
  grid-template-rows: minmax(50px, max-content) 1fr;
  width: minmax(100vw);
  min-height: 100vh;

  header {
    grid-area: head;
  }

  aside {
    grid-area: aside;
  }

  main {
    grid-area: main;
  }
}
</style>
