<template>
  <section>
    <h2 class="mb-4">User Details</h2>

    <div>
      <template v-if="isLoading">
        <p class="mb-4">Loading user data...</p>
        <ul>
          <li
            v-for="index in 10"
            :key="index"
            class="flex items-center gap-4 mb-4"
          >
            <div class="avatar">
              <Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
            </div>
            <span>
              <Skeleton width="10rem" class="mb-2"></Skeleton>
            </span>
          </li>
        </ul>
      </template>
      <template v-else>
        <ul>
          <li
            v-for="user in data"
            :key="user.id"
            class="flex items-center gap-4 mb-4"
          >
            <div class="avatar">
              <UserAvatar :label="getFirstLetter(user.name)" />
            </div>
            <span>
              {{ user.name }}
            </span>
          </li>
        </ul>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import Skeleton from "primevue/skeleton";

import { requestUsers } from "@/api/user/user.queries";
import UserAvatar from "./UserAvatar.vue";

const { data, isLoading } = requestUsers();

const getFirstLetter = (name: string): string => {
  return name.charAt(0).toUpperCase();
};
</script>
