<template>
    <main class="flex w-full bg-red-500 items-center text-light-500 justify-between">
        <div class="ml-10 flex items-center space-x-5 text-[1.5em]">
            <Icon class="w-10 h-10" icon="mdi:panorama-variant-outline" />
            <a>iManager</a>
        </div>
        <div class="flex">
            <a class="menuButtons">Albuns</a>
            <a class="menuButtons">Profile</a>
            <a class="menuButtons">Logout</a>
        </div>
    </main>
</template>

<script setup>
    import { Icon } from '@iconify/vue';
</script>