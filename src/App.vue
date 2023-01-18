<script setup>
import { computed } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import { useRouter, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { useAuth } from './stores/auth';
// import SideBar from './components/SideBar.vue'

const auth = useAuth()
const isLogin = computed(() => {
  return auth.isLoggedIn
})
</script>

<template>
  <div>
    <NavBar v-show="isLogin" class="sticky top-0 z-50" />
    <div class="relative">
      <router-view>
      </router-view>
    </div>
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
