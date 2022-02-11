<template>
    <div class="flex flex-col justify-center items-center" id="nav" v-if="$store.state.user">
    <NavBar />
    <div class="flex flex-col w-[60%] h-150 p-5 mt-10 shadow-xl">
      <div class="flex justify-between pb-5">
        <a class="font-bold">Meus Albuns de fotos</a>
        <div>
          <a class="mr-5">Olá, {{$store.state.user.providerData[0].uid}}</a>
          <button @click="$store.dispatch('logout')" class="text-blue-700">[sair]</button>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { db } from './firebase';
import { collection } from 'firebase/firestore';
import NavBar from './components/NavBar.vue';

const store = useStore()
onBeforeMount(async () =>{
  const col = await collection(db, "testing")
  console.log(col)
  store.dispatch('fetchUser')
})
</script>