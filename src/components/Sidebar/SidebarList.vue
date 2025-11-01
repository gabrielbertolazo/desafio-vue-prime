<template>
  <Menu :model="items" class="w-[300px]">
    <template #start>
      <h4 class="mt-6 mb-2 ml-8">Settings</h4>
    </template>
    <template #item="{ item, props }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a
        v-else
        v-ripple
        :href="item.url"
        :target="item.target"
        v-bind="props.action"
      >
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
      </a>
    </template>
  </Menu>
</template>

<script setup lang="ts">
import Menu from "primevue/menu";

const items = [
{
    label: "Home Page",
    icon: "pi pi-home",
    route: "/",
  },
  {
    label: "Privacy Settings",
    icon: "pi pi-shield",
    route: "/settings/privacy",
  },
  {
    label: "Account Details",
    icon: "pi pi-user",
    route: "/settings/account",
  },
  {
    label: "About",
    icon: "pi pi-info-circle",
    route: "/settings/about",
  },
];
</script>
