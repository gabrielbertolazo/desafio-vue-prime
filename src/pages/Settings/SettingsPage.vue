<template>
    <section class="settings-page m-8 flex flex-col justify-items-center items-center">
        <h1 class="text-3xl">{{ formatString(submenu) }} Page</h1>
        <p class="text-1xl">Configure your application {{ submenu }} here.</p>
    </section>

    <Sidebar :submenu="props.submenu" />
</template>

<script setup lang="ts">
import Sidebar from "@/components/Sidebar/Sidebar.vue";

const props = defineProps({
    submenu: {
        type: String,
        required: false,
        default: 'Settings',
    }
})

const formatString = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
</script>