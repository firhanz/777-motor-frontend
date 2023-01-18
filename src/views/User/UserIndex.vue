<template>
    <div class="p-2 flex flex-row-reverse">
      <button class="btn btn-sm gap-1">
        <PlusSmallIcon class="h-6 w-6" />
        Tambah <!--tambah user baru, route ke UserCreate-->
      </button>
    </div>
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama </th>
            <th>Status</th>
            <th>Aksi</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="data in state.user" :key="data.id">
            <th>{{ data.id }}</th>
            <td>
              <div>
                <a>
                {{ data.user.name }}
               </a>
               <a v-if="data.user.sales.role==3">**</a> <!--Senior-->
               <a v-if="data.user.sales.role==4">*</a> <!--Junior-->
              </div>
            </td>
            <td>
              <div class="btn">
                <a>
                {{ data.user.role }}
               </a>
              </div>
            </td>
            <td>
              <div class="btn">
                <button class="btn-primary" > Edit </button>
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
    user: []
  })
  
  // onMounted(() => {
  //   penjualanAPI.index()
  //     .then((response) => {
  //       state.penjualan = response.data.results
  //       console.log(state.penjualan)
  //     }).catch((err) => {
  //       console.log(err.response.data)
  //     });
  // })
  </script>