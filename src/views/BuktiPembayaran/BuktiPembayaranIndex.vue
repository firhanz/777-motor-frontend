<template>
  <h1>Bukti Pembayaran</h1>
  <div class="p-2 flex flex-row-reverse">
    <button class="btn btn-sm gap-1">
      <PlusSmallIcon class="h-6 w-6" />
      Tambah
    </button>
  </div>
  <div class="overflow-x-auto">
    <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th>Nomor Pembayaran</th>
          <th>Nama Sales</th>
          <th>Tanggal Pembayaran</th>
          <th>Tanggal Dijual</th>
          <th>Tanggal Terjual</th>
          <th>Catatan</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in state.buktipembayaran" :key="data.id">
          <th>{{ data.id }}</th>
          <td>{{ data.sales_id }}</td>
          <td>{{ data.timestamp }}</td>
          <td>{{ data.timestamp }}</td>
          <td>{{ data.timestamp }}</td>
          <td></td>
          <td>
            <div class="btn-group">
              <button class="btn btn-sm">View</button>
            </div>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { onMounted, reactive } from 'vue';
import { PlusSmallIcon } from "@heroicons/vue/24/outline";
import penjualanAPI from '../../api/penjualan';

const state = reactive({
  buktipembayaran: []
})

onMounted(() => {
  penjualanAPI.index()
    .then((response) => {
      state.buktipembayaran = response.data.results
      console.log(state.buktipembayaran)
    }).catch((err) => {
      console.log(err.response.data)
    });
})
</script>