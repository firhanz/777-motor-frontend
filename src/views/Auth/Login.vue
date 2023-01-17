<template>
  <div class="container flex items-center justify-center h-screen px-4 mx-auto">
    <div class="card w-96 bg-base-100 shadow-xl">
      <!-- <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> -->
      <form @submit.prevent="login">
      <div class="card-body">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input v-model="user.email" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <label class="label">
          <span v-if="validation.email" class="label-text-alt">{{ validation.email[0] }}</span>
        </label>
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input v-model="user.password" type="password" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <label class="label">
          <span v-if="validation.password" class="label-text-alt">{{validation.password[0]}}</span>
        </label>
        <!-- <p>Password</p> -->
        <div class="card-actions">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useAuth } from './../../stores/auth'

const router = useRouter()
const store = useAuth()

const user = reactive({
  email: '',
  password: '',
})

const validation = ref([])

const login = async () => {
  await store.login(user)
    .then(() => {
      router.replace({
        name: 'home'
      })
    }).catch((err) => {
      validation.value = err
    })
}
</script>