<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppAside, { type SubProps } from '@/components/AppAside.vue'
import { docs } from '@/components/AppAside.vue'

const subs = docs.map((doc) => doc.subs).flat(1) as SubProps[]
</script>

<template>
  <AppHeader />
  <div class="container clear">
    <div class="row wrapper">
      <AppAside />
      <div class="right-col">
        <div v-for="sub in subs" :key="sub.hash" :id="sub.hash.replace('#', '')">
          <h1>{{ sub.title }}</h1>
          <component :is="sub.component" />
          <div class="divider" style="width: 24%; margin: 30px 0"></div>
        </div>
      </div>
    </div>
  </div>
</template>
