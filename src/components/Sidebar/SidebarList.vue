<template>
  <Menu :model="sidebar.items" class="w-[20rem] p-2">
    <template #item="{ item, props }">
      <template v-if="item.isComponent">
        <component :is="item.component" v-bind="item.props" />
      </template>
      <template v-else>
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
          @click="item.action && item.action()"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </template>
  </Menu>
</template>

<script setup lang="ts">
import Menu from "primevue/menu";
import { useSidebar } from "@/composables/useSidebar"
const sidebar = useSidebar()
</script>
<style>
.p-menuitem-link {
  border: none !important;
}
.p-menu {
  border: none !important;
}
.p-tabmenuitem .p-menuitem-link {
  border: none !important;
}

.p-menu-item:last-child {
  position: absolute;
  bottom: 12px;
  width: 18rem;
}
</style>
