<template>
    <form class="form" @submit.prevent="register">
        <h2 class="formTxt">Registro</h2>
        <input
            class="input"
            type="email" 
            placeholder="Email"
            v-model="register_form.email" />
        <input 
            class="input"
            type="password" 
            placeholder="Senha"
            v-model="register_form.password" />
        <input 
            class="submit"
            type="submit"
            value="Registro" />
        <p class="text-gray-500">Já tem uma conta? <a @click.prevent="pressed" class="ml-1 cursor-pointer text-blue-700">Login</a></p>
    </form>
</template>

<script setup>
    import { ref, defineEmits } from 'vue';
    import { useStore } from 'vuex';

    const register_form = ref({})
    const store = useStore();

    const register = () => {
        store.dispatch('register', register_form.value);
    }

    const emits = defineEmits(['change'])

    function pressed(){
        emits('change')
    }

</script>