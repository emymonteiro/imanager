<template>
  <div id="nav" v-if="$store.state.user">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    {{$store.state.user}}
    <button @click="$store.dispatch('logout')">Logout</button>
  </div>
  <router-view/>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
onBeforeMount(() =>{
  store.dispatch('fetchUser')
})
</script>