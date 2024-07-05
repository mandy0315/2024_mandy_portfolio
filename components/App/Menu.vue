<script setup lang="ts">
const { dayTime } = useADayTime();
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
    <div class="menu-contant" :class="[{ 'active': openMenu }, dayTime === 'day' ? 'bg-day' : 'bg-night']">
      <div class="menu-cloud" />

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
    <div class="menu-before-bg" :class="{ 'active': openMenu }" @click="openMenu = false" />
  </nav>
</template>

<style lang="scss" scoped>
.menu {
  &-contant {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 150;
    width: 25rem;
    height: 100vh;
  }

  &-cloud {
    background: url('/assets/icons/menu/top-cloud.svg') no-repeat;
    background-size: contain;
    width: 6rem;
    height: 6rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  &-bottom {
    position: absolute;
    bottom: 0;
    right: 0;

    &-hitballoon {
      position: absolute;
      background: url('/assets/icons/menu/hitballoon.svg') no-repeat;
      background-size: contain;
      width: 5.8rem;
      height: 9rem;
      bottom: 1rem;
      right: 1rem;
    }

    &-cloud {
      background: url('/assets/icons/menu/bottom-cloud.svg') no-repeat;
      background-size: contain;
      width: 9rem;
      height: 7.5rem;
    }
  }

  &-text {
    height: 100%;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 2.5rem;

      li {
        padding-bottom: 1.5rem;
      }

      .menu-link {
        display: block;

        p {
          color: $white;
          line-height: 1.5;

          &:nth-child(1) {
            display: inline-block;
            font-size: $h2;
            font-weight: normal;
          }

          &:nth-child(2) {
            font-size: $h5;
            font-weight: bold;
          }
        }

        &-icon {
          display: inline-block;
          color: $white;
          font-size: $h5;
        }

        &:hover {
          p {
            color: $yellow;
          }

          .menu-link-icon {
            color: $yellow;
          }
        }
      }

      .menu-line {
        background: url('/assets/icons/menu/line.svg') no-repeat;
        background-size: contain;
        width: 12rem;
        height: 0.5rem;
      }

      .menu-community {
        p {
          font-size: $h5;
          color: $white;
          font-weight: bold;
          padding-bottom: 0.5rem;
        }

        a {
          display: inline-block;
          padding: 0 0.5rem;

          svg {
            color: $white;
            width: 3rem;
            height: 3rem;
          }

          &:hover {
            svg {
              color: $yellow;
            }
          }
        }
      }
    }
  }

  &-before-bg {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: $white;
    opacity: 0.75;
  }
}

// animation
.menu-before-bg {
  transform: translate3d(100%, 0, 0);
  transition: all 500ms ease-in-out;

  &.active {
    transform: translate3d(0, 0, 0);
    transition: all 500ms ease-in-out;
  }
}

.menu-contant {
  transform: translate3d(100%, 0, 0);
  transition: all 350ms ease-in-out;

  &.active {
    transform: translate3d(0, 0, 0);
    transition: all 350ms 200ms cubic-bezier(0.32, -0.05, 0.44, 1.41);
  }
}

.menu-link {
  transform: translateX(0px);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateX(20px);
    transition: all 0.2s ease-in-out;
  }
}

.menu-community {
  a {
    transform: translateY(0px);
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: translateY(-5px);
      transition: all 0.2s ease-in-out;
    }
  }
}
</style>
