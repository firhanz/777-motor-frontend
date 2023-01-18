import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from '../src/stores/auth'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../src/views/Auth/Login.vue'),
        meta: {
            authPage: true,
        }
    },
    {
    path: '/',
    name: 'base',
    component: () => import('../src/views/Base.vue'),
    children: [
        {
            path: '',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/penjualan',
            name: 'penjualan',
            component: () => import('../src/views/PenjualanMobil/PenjualanMobilIndex.vue')
        },
        {
            path: '/verifikasidokumen',
            name: 'verifikasidokumen',
            component: () => import('../src/views/VerifikasiDokumen/VerifikasiDokumenIndex.vue')
        },
        {
            path: '/verifikasikendaraan',
            name: 'verifikasikendaraan',
            component: () => import('../src/views/VerifikasiKendaraan/VerifikasiKendaraanIndex.vue')
        },
        {
            path: '/riwayatkegiatan',
            name: 'riwayatkegiatan',
            component: () => import('../src/views/RiwayatKegiatan/RiwayatKegiatanIndex.vue')
        },
        {
            path: '/persetujuanowner',
            name: 'persetujuanowner',
            component: () => import('../src/views/PersetujuanOwner/PersetujuanOwnerIndex.vue')
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('../src/views/User/UserIndex.vue')
        },
        {
            path: '/pembayaran',
            name: 'pembayaran',
            component: () => import('../src/views/Pembayaran/PembayaranIndex.vue')
        },
        {
            path: '/riwayatpembayaran',
            name: 'riwayatpembayaran',
            component: () => import('../src/views/RiwayatPembayaran/RiwayatPembayarannIndex.vue')
        }
    ],
   
    meta: {
        requireAuth: true,
    }
},
{

},
{

}];
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    if (to.meta.requireAuth) {
        const auth = useAuth()
        if (auth.user === null) {
            await auth.getUser()
        }
        if (auth.user) {
            next()
        } else {
            next({
                name: 'login',
            })
        }
    }

    if (to.meta.authPage) {
        const auth = useAuth()
        if (auth.user === null) {
            await auth.getUser()
        }
        if (!auth.user) {
            next()
        } else {
            next(from)
        }
    }
})

export default router