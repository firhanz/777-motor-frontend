<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title   ">Tambah Penjualan Mobil</h2>
            <form @submit.prevent="tambah">
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Nama Mobil</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt">Alt label</span>
                    </label>
                    <label class="label">
                        <span class="label-text">Nama Mobil</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt">Alt label</span>
                    </label>
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    </div>
</template>

<script setup>

</script>

<style>

</style>