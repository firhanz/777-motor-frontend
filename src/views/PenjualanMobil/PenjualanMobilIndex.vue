<template>
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
          <th>Nama</th>
          <th>Merek</th>
          <th>Tahun</th>
          <th>Kilometer</th>
          <th>Kapasitas Mesin</th>
          <th>Jenis Mesin</th>
          <th>Tipe Bodi</th>
          <th>Transmisi</th>
          <th>Warna</th>
          <th>Lokasi</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in state.penjualan" :key="data.id">
          <th>{{ data.id }}</th>
          <td>{{ data.nama_mobil }}</td>
          <td>{{ data.merek.name }}</td>
          <td>{{ data.tahun }}</td>
          <td>{{ data.kilometer }}</td>
          <td>{{ data.kapasitas_mesin }}</td>
          <td>{{ data.jenis_mesin.name }}</td>
          <td>{{ data.tipe_bodi.name }}</td>
          <td>{{ data.transmisi.name }}</td>
          <td>{{ data.warna.name }}</td>
          <td>{{ data.lokasi.name }}</td>
          <td>
            <div class="btn-group">
              <button class="btn btn-sm">Edit</button>
              <button class="btn btn-sm">Hapus</button>
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
  penjualan: []
})

onMounted(() => {
  penjualanAPI.index()
    .then((response) => {
      state.penjualan = response.data.results
      console.log(state.penjualan)
    }).catch((err) => {
      console.log(err.response.data)
    });
})
</script>