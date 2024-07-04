<script setup lang="ts">
const { openMenu } = useMenu();

const menuLinkGroup = [
  {
    name: 'Home',
    name_tw: '首頁',
    path: '/',
  },
  {
    name: 'About',
    name_tw: '關於我市',
    path: '/about',
  },
  {
    name: 'Skills',
    name_tw: '技能海灣',
    path: '/skills',
  },
  {
    name: 'Works',
    name_tw: '作品山丘',
    path: '/works',
  },
  {
    name: 'Contact',
    name_tw: '聯絡我',
    path: '/contact',
  },
];

</script>
<template>
  <nav>
    <div class="menu-contant-box" :class="{ 'active': openMenu }">
      <div class="menu-top-cloud" />

      <div class="menu-text">
        <ul>
          <li v-for="menu in menuLinkGroup" :key="menu.name" @click="openMenu = false">
            <NuxtLink :to="menu.path" class="menu-link">
              <p class="font-en">{{ menu.name }}
                <IconMaterialSymbolsArrowCircleRight class="menu-link-icon" />
              </p>
              <p>{{ menu.name_tw }}</p>
            </NuxtLink>
          </li>

          <li class="menu-line" />
          <li class="menu-community">
            <NuxtLink to="https://www.facebook.com/MandyTsai0315" target="_blank" external>
              <SvgIconFb />
            </NuxtLink>
            <NuxtLink to="https://www.instagram.com/mandy3152618" target="_blank" external>
              <SvgIconIg />
            </NuxtLink>
            <NuxtLink to="https://github.com/mandy0315" target="_blank" external>
              <SvgIconGithub />
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="menu-bottom">
        <div class="menu-bottom-hitballoon animate__animated" :class="{ 'animate__fadeInUp': openMenu }" />
        <div class="menu-bottom-cloud" />
      </div>
    </div>
    <div class="menu-bgw-box" :class="{ 'active': openMenu }" @click="openMenu = false" />
  </nav>
</template>