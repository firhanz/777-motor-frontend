<script setup>
import { computed } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import { useRouter, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { useAuth } from './stores/auth';
// import SideBar from './components/SideBar.vue'

const auth = useAuth()
const isLogin = computed(() =>{
  return auth.isLoggedIn
})
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <div>
    <NavBar v-show="isLogin" />
    <router-view>
    </router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
