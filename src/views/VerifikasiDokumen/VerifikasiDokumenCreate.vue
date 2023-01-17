<template>
    <div>
      <h1> Appraisal </h1> <!--ini halaman verifikasi dokumen dari mobil yang akan dijual-->
        <div>
            <p>BPKB       :</p> <!-- <button @click="showDropdown = !showDropdown">Pilih Salah Satu</button>
                                <select v-if = "showDropdown" @change="handleChange">
                                    <option v-for = "option in options" :value="option.value">{{ option.text }} 
                                    </option>
                                </select> -->
        </div>

        <div>
            <p>STNK       :</p>
        </div>

        <div>
            <p>Pajak      :</p>
        </div>
      
        <div>
            <p>Body Unit  :</p>
        </div>
      
        <div>
            <p>Harga Unit :</p>
        </div>
      
        <div>
            <p>Catatan    :</p> <input type="text" placeholder="Enter text here" />
        </div>

        <div>
            <button>Layak Beli</button>
            <button>Tidak Layak Beli</button>
        </div>
    </div>
  </template>