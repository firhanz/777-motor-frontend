import { defineStore } from 'pinia'
import auth from '../api/auth'
import { ref } from 'vue'

export const useAuth = defineStore('auth-store', () => {
    const user = ref(null)
    const isLoggedIn = ref(false)
    const role = ref(null)

    const register = async function (credentials) {
        try {
            await auth.csrf()
            await auth.register(credentials)
            getUser()
        } catch (err) {
            user.value = {}
            console.error('Error loading new arrivals:', err)
            return err
        }
    }

    const login = async function (credentials) {
        try {
            await auth.csrf()
            await auth.login(credentials)
            // console.log(user.value)
            await getUser()
        } catch (err) {
            user.value = null
            // console.log(err.response.data.errors)
            throw err.response.data.errors
        }
    }

    const logout = async function () {
        try {
            await auth.logout()
            user.value = null
            isLoggedIn.value = false
            role.value = null
        } catch (err) {
            console.error('Error loading new arrivals:', err)
            return err
        }
    }

    const getUser = async function () {
        try {
            const response = await auth.user()
            user.value = response.data
            isLoggedIn.value = true
            role.value = user.value.role
            return response.data
        } catch (err) {
            console.error('Error loading new arrivals:', err)
            user.value = null
            return err
        }
    }

    return {
        user,
        isLoggedIn,
        role,
        register,
        login,
        getUser,
        logout,
    }
})