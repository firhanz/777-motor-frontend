import http from 'axios'

export default {
    index() {
        return http.get('/api/penjualan')
    },
}