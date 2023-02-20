<script setup lang="ts">
import { useMenusStore } from '@/store/menus';
import { computed } from 'vue';

const menusStore = useMenusStore();
const menuList = computed(() => menusStore.getMenus);
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-head">
      <div class="hamburger opend">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="sidebar-logo">MENU</div>

    <ul class="sidebar-contents">
      <li v-for="menu in menuList">
        <a href="{{ menu.link }}">{{ menu.name }}</a>

        <ul v-if="menu.children && menu.children.length !== 0">
          <li v-for="subMenu in menu.children">
            <a href="{{ subMenu.link }}">{{ subMenu.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import url('./style.scss');
</style>
