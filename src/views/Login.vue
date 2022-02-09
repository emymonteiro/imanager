<template>
    <main class="login">
        <section class="flex pt-30 justify-center items-center">
            <LoginVue v-on:change="myHandler" v-if="page == 'login'"  />
            <RegisterVue  v-on:change="myHandler" v-else />
        </section>
    </main>
</template>

<script setup>
    import LoginVue from '../components/Login.vue';
    import RegisterVue from '../components/Register.vue';
    import { ref } from 'vue';

    const page = ref('login')

    const myHandler = () => {
        page.value = page.value == 'login' ? 'register' : 'login'
    }
</script>