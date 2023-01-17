import http from 'axios'

export default {
    csrf() {
        return http.get('/sanctum/csrf-cookie')
    },
    login(data) {
        return http.post('/login', data)
    },
    register(data) {
        return http.post('/register', data)
    },
    logout() {
        return http.post('/logout')
    },
    user() {
        return http.get('/api/user')
    },
}