<script setup lang="ts">
import AppCode from '../AppCode.vue'
</script>

<template>
  <div>
    <p style="margin-bottom: 1rem">Via npm</p>
    <AppCode title="Npm" :code="['npm install fetch//-use']" />
    <p style="margin-bottom: 1rem">Via yarn</p>
    <AppCode title="Npm" :code="['yarn add fetch//-use']" />
  </div>
</template>
