import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export type Menu = {
  name: string;
  link: string;
  children?: Menu[];
};

const initialMenus = [
  {
    name: '상위메뉴_1',
    link: '/',
    children: [
      {
        name: '하위메뉴_1_1',
        link: '/',
      },
    ],
  },
];

export const useMenusStore = defineStore('menus', () => {
  const menus = ref<Menu[]>(initialMenus);
  const addMenus = (menu: Menu) => menus.value.push(menu);
  const getMenus = computed(() => menus.value);

  return { addMenus, getMenus };
});
