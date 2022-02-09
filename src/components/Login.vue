<template>
    <form class="form" @submit.prevent="login">
        <h2 class="formTxt">Login</h2>
        <input 
            class="input"
            type="email" 
            placeholder="Email"
            v-model="login_form.email" />
        <input
            class="input"
            type="password" 
            placeholder="Senha"
            v-model="login_form.password" />
        <input
            class="submit"
            type="submit"
            value="Login" />
        <p class="text-gray-500">Não possui conta? <a @click.prevent="pressed" class="ml-1 cursor-pointer text-blue-700">Cadastre-se</a></p>
    </form>
</template>

<script setup>
    import { ref, defineEmits } from 'vue';
    import { useStore } from 'vuex';

    const login_form = ref({})
    const store = useStore();

    const login = () => {
        store.dispatch('login', login_form.value);
    }

    const emit = defineEmits(['change'])

    function pressed(){
        console.log(emit)
        emit('change')
    }
</script>