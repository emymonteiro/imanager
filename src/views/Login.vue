<template>
    <main class="login">
        <section class="forms">
            <form class="register" @submit.prevent="register">
                <h2>Registro</h2>
                <input 
                    type="email" 
                    placeholder="Email"
                    v-model="register_form.email" />
                <input 
                    type="password" 
                    placeholder="Senha"
                    v-model="register_form.password" />
                <input 
                    type="submit"
                    value="Registro" />
            </form>
            <form class="login" @submit.prevent="login">
                <h2>Login</h2>
                <input 
                    type="email" 
                    placeholder="Email"
                    v-model="login_form.email" />
                <input 
                    type="password" 
                    placeholder="Senha"
                    v-model="login_form.password" />
                <input 
                    type="submit"
                    value="Registro" />
            </form>
        </section>
    </main>
</template>

<script setup>
    import { ref } from 'vue';
    import { useStore } from 'vuex';

    const login_form = ref({})
    const register_form = ref({})
    const store = useStore();

    const login = () => {
        store.dispatch('login', login_form.value);
    }
    const register = () => {
        store.dispatch('register', register_form.value);
    }

</script>